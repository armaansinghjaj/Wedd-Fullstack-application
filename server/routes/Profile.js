const express = require("express");
const router = express.Router();
const loadDefaultValues = require("../modules/LoadDefaultValues");
const pool = require("../modules/SQLconnectionpool");
const setProfilePicture = require("../modules/SetProfilePicture");
const CustomerController = require("../src/controllers/CustomerController");
const path = require("path");
var fs = require("fs");
const readFile = (filename) => fs.readFileSync(filename).toString("UTF8");

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

	// pool.getConnection((err, con) => {
	// 	if (err) throw err;
	// 	con.query(`SELECT * FROM customer where email = '${sess.user}'`, function (err, account, fields) {
	// 		con.release();
	// 		if(err) throw err;

	// 		return res.render("profile-customer", {customer_account: account[0], page: null});
	// 	});
	// });


});
router.get("/profile/:id", (req, res) => {
	// loadDefaultValues(req);
	let sess = req.session;

	if(sess.access === 1 || sess.access === 2){
        return res.redirect("/employeeprofile");
    }

	// pool.getConnection((err, con) => {
	// 	if (err) throw err;
	// 	con.query(`SELECT * FROM customer where email = '${sess.user}'`, function (err, account, fields) {
	// 		con.release();
	// 		if(err) throw err;

	// 		return res.render("profile-customer", {customer_account: account[0], page: "account"});
	// 	});
	// });

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
// router.get("/support", (req, res) => {
// 	loadDefaultValues(req);
// 	let sess = req.session;

// 	pool.getConnection((err, con) => {
// 		if (err) throw err;
// 		con.query(`SELECT * FROM customer where email = '${sess.user}'`, function (err, account, fields) {
// 			con.release();
// 			if(err) throw err;

// 			return res.render("profile-customer", {customer_account: account[0], page: "support"});
// 		});
// 	});
// });

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


		// pool.getConnection((err, con) => {
		// 	if (err) throw err;
		// 	con.query(`UPDATE customer SET customer_pp = '', name = '${req.body.customer_name}', email = '${req.body.customer_email}', home_address = '${req.body.home_address}', customer_car = '${req.body.customer_car}' where email = '${sess.user}'`, function (err, result, fields) {
		// 		con.release();
		// 		if (err) throw err;

		// 		return res.redirect("/profile/account");
		// 	});
		// });
	} else if (req.query.option === "password") {

		CustomerController.getByID(req.params.id, (error, user)=>{
			if(error){
					
				return res.status(error.errorDetails.errorCode).send(error);
				
			} else{
	
				if(req.body.customer_password.old === user.getPassword()){
					if(req.body.customer_password.new === req.body.customer_password.confirm){
						CustomerController.updatePassword(req.params.id, req.body.customer.new_password, (error, user)=>{
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

		// pool.getConnection((err, con) => {
		// 	if (err) throw err;
		// 	con.query(`SELECT password FROM customer where email = '${sess.user}'`, function (err, user_password, fields) {
		// 		con.release();
		// 		if(err) throw err;
	
		// 		if(req.body.customer_password.old === user_password[0].password){
		// 			if(req.body.customer_password.new === req.body.customer_password.confirm){
		// 				pool.getConnection((err, con) => {
		// 					if (err) throw err;
		// 					con.query(`UPDATE customer SET password = '${req.body.customer.new_password}' where email = '${sess.user}'`, function (err, result, fields) {
		// 						con.release();
		// 						if (err) throw err;

		// 						return res.redirect("/profile/account");
		// 					});
		// 				});
		// 			} else {
		// 				res.send("Values didn't matched!");
		// 			}
		// 		} else {
		// 			res.send("Values didn't matched!");
		// 		}
		// 	});
		// });
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
	} else if (req.query.option === "delete") {
		pool.getConnection((err, con) => {
			if (err) throw err;
			con.query(`DELETE FROM customer where email = '${sess.user}'`, function (err, result, fields) {
				con.release();
				if (err) throw err;

				return res.redirect("/");
			});
		});
	}
});
router.post("/support", (req, res) => {
	pool.getConnection((err, con) => {
		if (err) throw err;
		con.query(`INSERT INTO supportRequests (email, reason, description, comments) VALUES ('${req.body.customer_email}', '${req.body.problem.reason}', '${req.body.problem.brief_description}', '${req.body.problem.comments}')`, function (err, result, fields) {
			con.release();
			if (err) throw err;

			return res.redirect("/profile");
		});
	});
});

module.exports = router;