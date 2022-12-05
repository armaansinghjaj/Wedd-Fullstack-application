const express = require("express");
const router = express.Router();
const EmployeeController = require("../src/controllers/EmployeeController");
const generateUserID = require("../modules/GenerateUserID");

router.get("/", (req, res) => {

	let sess = req.session;

	if (sess.access != 1) {
		return res.status(403).send({
			status: 403,
			message: "Access denied."
		});
	}

	EmployeeController.getAllDrivers((error, driverList)=>{
		if(error){
			return res.status(error.status).send(error);
		} else {
			return res.status(200).send(driverList);
		}
	})
});

router.get("/:id", (req, res)=>{
	EmployeeController.getByID(req.params.id, (error, driver)=>{
		if(error){
			return res.status(error.status).send(error);
		} else {
			return res.status(200).send(driver);
		}
	})
})

router.put("/:method/:id", (req, res)=>{

	if (req.session.access != 1) {
		return res.status(403).send({
			status: 403,
			message: "Access denied."
		});
	}

	if(req.params.method === "put"){
		if (req.body.edit_name === undefined || req.body.edit_email === undefined || req.body.edit_name === "" || req.body.edit_email === "") {

			return res.status(202).send({
				status: 202,
				message: "Fields cannot be empty."
			});

		} else {
			EmployeeController.update(req.params.id, req.body.edit_email, req.body.edit_name, 0, null, req.body.flag, (error, result)=>{
				if(error){
					return res.status(error.status).send(error);
				} else {
					return res.status(200).send(result);
				}
			})

		}

	} else if(req.params.method === "post"){

		if (req.body.new_name === undefined || req.body.new_email === undefined || req.body.new_password === undefined || req.body.new_name === "" || req.body.new_email === "" || req.body.new_password === "") {
			
			return res.status(202).send({
				status: 202,
				message: "Fields cannot be empty."
			});

		} else {
			EmployeeController.insert(generateUserID(), req.body.new_email, req.body.new_name, req.body.new_password, 2, (error, result)=>{
				if(error){
					return res.status(error.status).send(error);
				} else {
					return res.status(200).send(result);
				}
			})

		}
	}
})

router.delete("/:id", (req, res)=>{
	EmployeeController.remove(req.params.id, (error, result)=>{
		if(error){
			return res.status(error.status).send(error);
		} else {
			return res.status(200).send(result);
		}
	})
})

module.exports = router;