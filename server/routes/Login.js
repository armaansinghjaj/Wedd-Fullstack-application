const express = require("express");
const router = express.Router();
const loadDefaultValues = require("../modules/LoadDefaultValues");
const pool = require("../modules/SQLconnectionpool");

router.get("/", (req, res) => {
	loadDefaultValues(req);
	let sess = req.session;
	if (sess.access) {
		res.redirect("/profile");
	} else {
		res.render("login", {year: new Date().getFullYear(), title: "Login"});
	}
});

router.post("/", (req, res) => {
	loadDefaultValues(req);
	let sess = req.session;
	if (sess.access) {
		res.redirect("/profile");
	} else if (req.body.email === "" || req.body.password === "") {
		res.send("error");
	} else {
		pool.getConnection((err, con) => {
			if (err) throw err;
			con.query(`SELECT customer_id, email, password, role, name FROM customer WHERE email = '${req.body.email}' union all SELECT employee_id, email, password, role, name FROM employees WHERE email = '${req.body.email}'`, function (err, result, fields) {
				con.release();

				if (err) res.send("backend error");
				
				if (result.length > 0) {
					if (result[0].password === req.body.password) {
						
						sess.useremail = req.body.email;
						sess.user = result[0].email;

						console.log(sess.user);
						
						if (result[0].role === 3) {
							sess.access = 3;
							return res.send({
								user: result[0].email,
								name: result[0].name,
								// login: true,
								loginType: "customer"
							});
							// return res.redirect("/");
						} else if (result[0].role === 2) {
							sess.access = 2;
							return res.send({
								user: result[0].email,
								name: result[0].name,
								// login: true,
								loginType: "driver"
							});
							// return res.redirect("/driver");
						} else if (result[0].role === 1) {
							sess.access = 1;
							return res.send({
								user: result[0].email,
								name: result[0].name,
								// login: true,
								loginType: "admin"
							});
							// return res.redirect("/admin");
						}
					} else {
						res.send("invalid password");
					}
				} else {
					res.send("invalid email");
				}
			});
		});
	}
});

module.exports = router;