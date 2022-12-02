const express = require("express");
const router = express.Router();
const loadDefaultValues = require("../modules/LoadDefaultValues");
const pool = require("../modules/SQLconnectionpool");
const Customer = require("../src/models/Customer");
const generateUserID = require("../modules/GenerateUserID");
const CustomerController = require("../src/controllers/CustomerController");

router.get("/", (req, res) => {
	// loadDefaultValues(req);

	let sess = req.session;

	if (sess.access) {
		return res.status(200).send({
			redirect: "/profile"
		}).redirect("/api/profile");
	} else {
		return res.render("signup", {year: new Date().getFullYear(), title: "Signup"});
		
		// return res.status(200).send({
		// 	redirect: "/login"
		// });
	}
});
router.post("/", (req, res) => {
	// loadDefaultValues(req);

	let sess = req.session;

	// if (sess.access) {
		
	// 	return res.status(200).send({
	// 		redirect: "/profile"
	// 	});
	// }else 
	if (req.body.name === undefined || req.body.email === undefined || req.body.password === undefined) {
		
		return res.status(400).send({
			error: true,
			errorDetails: {
				errorCode: 400,
				errorMsg: "Email or password cannot be empty.",
			}
		});
		
	} else {

		CustomerController.getByEmail(req.body.email, (error, result)=>{
			if(error && error.errorDetails.errorCode !== 404){
				
				return res.status(error.errorDetails.errorCode).send(error);
				
			} else{

				// const customer = new Customer(generateUserID(), req.body.email, req.body.name, req.body.password, 3);

				CustomerController.insert(generateUserID(), req.body.email, req.body.name, req.body.password, 3, null, null, null, (error, user)=>{
					if(error){
						return res.status(error.errorDetails.errorCode).send(error);
					} else {
						// set user's id into the session
							sess._uid = user.getId();

							sess.access = 3;
							return res.status(200).send({
								user: {
									userEmail: user.getEmail(),
									userName: user.getName()
								},
								sessionID: user.getId(),
								accessPath: "/customer"
							});
					}
				})
			}
		})
	}
});
module.exports = router;