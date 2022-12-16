const express = require("express");
const router = express.Router();
const loadDefaultValues = require("../modules/LoadDefaultValues");
const LoginController = require("../src/controllers/LoginController");

router.get("/", (req, res) => {});

router.post("/", (req, res) => {

	let sess = req.session;

	if (req.body.email === "" || req.body.password === "" || req.body.email === undefined || req.body.password === undefined) {

		return res.status(400).send({
			status: 400,
			message: "Email or password cannot be empty.",
		});

	} else {

		LoginController.getByEmail(req.body.email, (error, user)=>{
			if(error){
				return res.status(error.status).send(error)
			} else {
				if(user.getPassword() === req.body.password){ // use bycrypt here
					
					// set user's id into the session
					sess._uid = user.getId();

					if(user.getRoleID() === 1){

						sess.access = 1;
						return res.status(200).send({
							status: 200,
							message: "User logged in",
							user: {
								name: user.getName(),
								sessionID: user.getId(),
								accessPath: "/admin"
							}
						});

					} else if(user.getRoleID() === 2){

						sess.access = 2;
						return res.status(200).send({
							status: 200,
							message: "User logged in",
							user: {
								name: user.getName(),
								sessionID: user.getId(),
								accessPath: "/driver"
							}
						});

					} else if(user.getRoleID() === 3){

						sess.access = 3;
						return res.status(200).send({
							status: 200,
							message: "User logged in",
							user: {
								name: user.getName(),
								sessionID: user.getId(),
								accessPath: "/"
							}
						});
					}
				} else{
					return res.status(404).send({
						status: 404,
						message: "The email or password you entered is incorrect. Please try again."
					});
				}
			}
		})
	}
});

module.exports = router;