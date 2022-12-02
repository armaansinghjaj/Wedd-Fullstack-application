const express = require("express");
const router = express.Router();
const loadDefaultValues = require("../modules/LoadDefaultValues");
const pool = require("../modules/SQLconnectionpool");
const setProfilePicture = require("../modules/SetProfilePicture");
const CustomerController = require("../src/controllers/CustomerController");
const path = require("path");
var fs = require("fs");
const readFile = (filename) => fs.readFileSync(filename).toString("UTF8");
const SupportController = require("../src/controllers/SupportController");

router.get("/:id", (req, res) => {
	// loadDefaultValues(req);
	
	let sess = req.session;
	
	if(sess.access === 1 || sess.access === 2){
        return res.redirect("/employeeprofile");
    }

	CustomerController.getByID(req.params.id, (error, user)=>{
		if(error){
				
			return res.status(error.errorDetails.errorCode).send(error);
			
		} else{

			return res.status(200).send({
				email: user.getEmail(),
				name: user.getName(),
				home_address: user.getHomeAddress(),
				car_name: user.getCarName(),
				picture_path: user.getProfilePicture()
			})

		}
	})
});
router.get("/profile/:id", (req, res) => {
	// loadDefaultValues(req);
	let sess = req.session;

	if(sess.access === 1 || sess.access === 2){
        return res.redirect("/employeeprofile");
    }

	CustomerController.getByID(req.params.id, (error, user)=>{
		if(error){
				
			return res.status(error.errorDetails.errorCode).send(error);
			
		} else{

			return res.status(200).send({
				email: user.getEmail(),
				name: user.getName(),
				home_address: user.getHomeAddress(),
				car_name: user.getCarName(),
				picture_path: user.getProfilePicture()
			})

		}
	})
});
router.get("/support", (req, res) => {
	return res.status(200).send({
		message: "Get works fine"
	})
});

router.put("/profile/:id", setProfilePicture.single("image"), (req, res) => {
	// loadDefaultValues(req);
	let sess = req.session;

	if (req.query.option === "details") {

		CustomerController.updateInfo(req.params.id, req.body.customer_email, req.body.customer_name, req.body.customer_car, req.body.home_address, (error, user)=>{
			if(error){
				
				return res.status(error.errorDetails.errorCode).send(error);
				
			} else{
	
				return res.status(200).send({
					message: "Information updated successfully"
				})
	
			}
		})

	} else if (req.query.option === "password") {

		console.log(1)

		CustomerController.getByID(req.params.id, (error, user)=>{
			if(error){
				return res.status(error.errorDetails.errorCode).send(error);
				
			} else{
				if(req.body.profile_password_old === user.getPassword()){
					if(req.body.profile_password_new === req.body.profile_password_confirm){
						CustomerController.updatePassword(req.params.id, req.body.profile_password_new, (error, user)=>{
							if(error){
								return res.status(error.errorDetails.errorCode).send(error);
								
							} else{
								return res.status(200).send({
									message: "Password changed successfully"
								})
							}
						})
					} else{
						return res.status(403).send({
							message: "Passwords do not match."
						})
					}
				} else{
					return res.status(403).send({
						message: "Passwords do not match."
					})
				}
	
			}
		})

	} else if (req.query.option === "profilepicture") {
		let imageName = "/profile_pictures/" + readFile(path.join(__dirname, "../", "server-side files", "temporary text files", "profile picture temporary data", `${sess.user}.txt`));

		pool.getConnection((err, con) => {
			if (err) throw err;
			con.query(`SELECT customer_pp FROM customer where email = '${sess.user}'`, function (err, profile_picture_data, fields) {
				con.release();
				if (err) throw err;
				else if (profile_picture_data[0].customer_pp != null) {
                    
					let full_path = path.join(__dirname, "../", "public", `${profile_picture_data[0].customer_pp}`);
					try {
						fs.unlinkSync(full_path);
					} catch (exception) {
                        console.log(exception)
                    }
				}
			});
		});

		pool.getConnection((err, con) => {
			if (err) throw err;
			con.query(`UPDATE customer SET customer_pp = '${imageName}' where email = '${sess.user}'`, function (err, result, fields) {
				con.release();
                
				if (err) throw err;

				try{
                    fs.unlinkSync(path.join(__dirname, "../", "server-side files", "temporary text files", "profile picture temporary data", `${req.session.user}.txt`));
                }
                catch(error){
                    console.log(error);
                }
				return res.redirect("/profile/account");
			});
		});
	}
});
router.delete("/profile/:id", (req, res)=>{

	CustomerController.remove(req.params.id, (error, result)=>{
		if(error){
			
			return res.status(error.errorDetails.errorCode).send(error);
			
		} else{
			req.session.sessionID = null;
			req.session.access = null; 
			req.session.user = null;
			return res.status(200).send({
				delete: true,
				message: "Account deleted successfully"
			})

		}
	})
})

router.put("/support", (req, res) => {

	SupportController.insert(req.body.customer_email, req.body.reason, req.body.description, req.body.comments, (error, result)=>{
		if(error){
			
			return res.status(error.errorDetails.errorCode).send(error);
			
		} else{
			
			return res.status(result.status).send(result)

		}
	})
});

module.exports = router;