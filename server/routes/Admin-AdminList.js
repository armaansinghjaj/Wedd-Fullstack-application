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

	EmployeeController.getAllAdmins((error, adminList)=>{
		if(error){
			return res.status(error.status).send(error);
		} else {
			return res.status(200).send(adminList);
		}
	})
});

router.get("/:id", (req, res)=>{
	EmployeeController.getByID(req.params.id, (error, admin)=>{
		if(error){
			return res.status(error.status).send(error);
		} else {
			return res.status(200).send(admin);
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
			EmployeeController.insert(generateUserID(), req.body.new_email, req.body.new_name, req.body.new_password, 1, (error, result)=>{
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

// router.post("/", (req, res) => {
// 	let sess = req.session;
	
// 	if (sess.access != 1){
// 		res.redirect("/");
// 		return;
// 	}
// 	let action = req.body.action;

// 	if (action === "edit") {
// 		pool.getConnection((err, con) => {
// 			if (err) throw err;
// 			con.query(`SELECT * FROM employees WHERE employee_id = '${req.body.selected}' `, function (err, result, fields) {
// 				con.release();
// 				if(err) throw err;

// 				sess.edit_employee_id = result[0].employee_id;
// 				sess.edit_email = result[0].email;
// 				sess.edit_name = result[0].name;

// 				res.render("admins", sess);
// 				return;
// 			});
// 		});
// 	}
// 	if (action === "delete") {
// 		pool.getConnection((err, con) => {
// 			if (err) throw err;

// 			con.query(`DELETE FROM employees WHERE employee_id = '${req.body.selected}' `, function (err, result, fields) {
// 				con.release();
// 				if(err) throw err;
// 				res.redirect("/admins");
// 				return;
// 			});
// 		});
// 	}
// 	if (action === "update") {
// 		if (req.body.edit_f_name === "" || req.body.edit_l_name === "" || req.body.edit_email === "") {
// 			res.send("error");
// 		} else {
// 			pool.getConnection((err, con) => {
// 				if (err) throw err;
// 				con.query(`UPDATE employees set name = '${req.body.edit_name}', email = '${req.body.edit_email}' WHERE employee_id = '${req.body.edit_employee_id}' `, function (err, result, fields) {
// 					con.release();
// 					if(err) throw err;

// 					res.redirect("/admins");
// 					return;
// 				});
// 			});
// 		}
// 	}
// 	if (action === "add") {
// 		if (req.body.new_name === "" || req.body.new_email === "" || req.body.new_password === "") {
// 			res.send("error");
// 		} else {
// 			pool.getConnection((err, con) => {
// 				if (err) throw err;
// 				con.query(`INSERT INTO employees (employee_id, email , name, password, role) VALUES (0,'${req.body.new_email}','${req.body.new_name}','${req.body.new_password}', 1)`, function (err, result, fields) {
// 					con.release();
// 					if(err) throw err;
// 					res.redirect("/admins");
// 				});
// 			});
// 		}
// 	}
// });

module.exports = router;