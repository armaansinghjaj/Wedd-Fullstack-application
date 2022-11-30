const express = require("express");
const router = express.Router();
const loadDefaultValues = require("../modules/LoadDefaultValues");
const LoginController = require("../src/controllers/LoginController");

router.get("/", (req, res) => {
	
	let sess = req.session;

	if (sess.access) {

		return res.status(200).redirect("/api/profile");

	} else {
		return res.render("login", {year: new Date().getFullYear(), title: "Login"});
		
		// return res.status(200).send({
		// 	redirect: "/login"
		// });
	}
});

router.post("/", (req, res) => {
	
	let sess = req.session;
	
	if (sess.access) {

		return res.status(200).send({
			redirect: "/profile"
		}).redirect("/api/profile");

	} else if (req.body.email === undefined || req.body.password === undefined) {

		return res.status(400).send({
			error: true,
			errorDetails: {
				errorCode: 400,
				errorMsg: "Email or password cannot be empty.",
			}
		});

	} else {

		LoginController.getByEmail(req.body.email, (error, user)=>{
			if(error){

				return res.status(error.errorDetails.errorCode).send(error)

			} else {
				if(user.getPassword() === req.body.password){ // use bycrypt here
					
					// set user's id into the session
					sess._uid = user.getId();

					if(user.getRoleID() === 1){

						sess.access = 1;
						return res.status(200).send({
							user: {
								userEmail: user.getEmail(),
								userName: user.getName()
							},
							sessionID: user.getId(),
							accessPath: "/admin"
						});
						

					} else if(user.getRoleID() === 2){

						sess.access = 2;
						return res.status(200).send({
							user: {
								userEmail: user.getEmail(),
								userName: user.getName()
							},
							sessionID: user.getId(),
							accessPath: "/driver"
						});

					} else if(user.getRoleID() === 3){

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
				}
			}
		})
	}
});

module.exports = router;