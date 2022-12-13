const express = require("express");
const router = express.Router();
const EmployeeController = require("../src/controllers/EmployeeController");

router.get("/:id", (req, res) => {

	let sess = req.session;

	if (sess.access != 1) {
		return res.status(403).send({
			status: 403,
			message: "Access denied."
		});
	}

	EmployeeController.getByID(req.params.id, (error, employee)=>{
		if(error){
			return res.status(error.status).send(error);
		} else {
			if(employee.setPassword(null)){
				return res.status(200).send(employee);
			}
		}
	})
});

router.put("/:id/:quantity", (req, res)=>{

	let sess = req.session;

	if (sess.access != 1) {
		return res.status(403).send({
			status: 403,
			message: "Access denied."
		});
	}

	if(req.params.quantity === "information"){
		if (req.body.edit_name === undefined || req.body.edit_email === undefined || req.body.edit_name === "" || req.body.edit_email === "") {

			return res.status(406).send({
				status: 406,
				message: "Fields cannot be empty."
			});

		} else {
			EmployeeController.update(req.params.id, req.body.edit_email, req.body.edit_name, 0, null, req.body.emailFlag, (error, result)=>{
				if(error){
					return res.status(error.status).send(error);
				} else {
					return res.status(200).send(result);
				}
			})

		}
	} else if(req.params.quantity === "password"){
		if (req.body.old_password === undefined || req.body.new_password === undefined || req.body.confirm_password === undefined || req.body.old_password === "" || req.body.new_password === "" || req.body.confirm_password === "") {

			return res.status(406).send({
				status: 406,
				message: "Fields cannot be empty."
			});

		} else {

			if(req.body.new_password !== req.body.confirm_password){
				return res.status(406).send({
					status: 406,
					message: "Passwords do not match."
				});
			} else {
				EmployeeController.getByID(req.params.id, (error, user)=>{
					if(error){
						return res.status(error.status).send(error);
					} else {
						if(user.getPassword() !== req.body.old_password){
							return res.status(406).send({
								status: 406,
								message: "Passwords do not match."
							});
						} else {
							// (id, email, name, passwordFlag, password, emailFlag, callback)
							// EMAIL, NAME --> NULL, PASSWORD_FLAG --> 1 (PASSWORD CHANGED), PASSWORD --> CONFIRM_PASSWORD, EMAILFLAG --> 1 (EMAIL NOT CHANGED)
							EmployeeController.update(req.params.id, null, null, 1, req.body.confirm_password, 0, (error, result)=>{
								if(error){
									return res.status(error.status).send(error);
								} else {
									return res.status(200).send(result);
								}
							})
						}
					}
				})
			}
		}
	}
});

router.delete("/:id", (req, res)=>{

	let sess = req.session;

	if (sess.access != 1) {
		return res.status(403).send({
			status: 403,
			message: "Access denied."
		});
	}

	EmployeeController.remove(req.params.id, (error, result)=>{
		if(error){
			return res.status(error.status).send(error);
		} else {
			return res.status(200).send(result);
		}
	})
})

module.exports = router;