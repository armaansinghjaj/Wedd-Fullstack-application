const express = require("express");
const router = express.Router();
const loadDefaultValues = require("../modules/LoadDefaultValues");
const pool = require("../modules/SQLconnectionpool");
const Customer = require("../src/models/Customer");
const generateUserID = require("../modules/GenerateUserID");
const CustomerController = require("../src/controllers/CustomerController");
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.get("/", (req, res) => {});

router.post("/", (req, res) => {

	let sess = req.session;
	if (req.body.name === undefined || req.body.email === undefined || req.body.password === undefined || req.body.name === "" || req.body.email === "" || req.body.password === "") {
		
		return res.status(400).send({
			status: 400,
			message: "Email or password cannot be empty.",
		});
		
	} else {

		CustomerController.getByEmail(req.body.email, (error, result)=>{
			
			if(error && error.status !== 404){
				
				return res.status(error.status).send(message);
				
			} else{

				// const customer = new Customer(generateUserID(), req.body.email, req.body.name, req.body.password, 3);

				bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
					CustomerController.insert(03+generateUserID(), req.body.email, req.body.name, hash, 3, null, null, null, (error, user)=>{
						if(error){
							return res.status(error.status).send(error);
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
				});
			}
		})
	}
});
module.exports = router;