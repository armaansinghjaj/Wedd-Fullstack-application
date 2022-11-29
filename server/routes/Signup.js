const express = require("express");
const router = express.Router();
const loadDefaultValues = require("../modules/LoadDefaultValues");
const pool = require("../modules/SQLconnectionpool");
const {signupSessionID} = require("../modules/GenerateSessionID");

router.get("/", (req, res) => {
	loadDefaultValues(req);

	let sess = req.session;
	if (sess.access) {
		return res.redirect("/profile");
	}

	return res.render("signup", {year: new Date().getFullYear(), title: "Signup"});
});
router.post("/", (req, res) => {
	loadDefaultValues(req);

	let sess = req.session;
	if (sess.access) {
		res.redirect("/profile");
		return;
	}
	if (req.body.email === "" || req.body.name === "" || req.body.password === "") {
		return res.send({
			userCreate: false,
			signinErrorMessage: "Email or password cannot be empty."
		});
	}

	pool.getConnection((err, con) => {
		if (err) throw err;

		con.query(`SELECT * FROM customer WHERE email = '${req.body.email}'`, function (err, driversFromDB, fields) {
			con.release();
			if(err) throw err;

			console.log(driversFromDB[0] !== null);
			console.log(driversFromDB[0]);
			if(driversFromDB[0]){
				return res.send({
					userCreate: false,
					signinErrorMessage: "Sorry, that email address is already associated with an account."
				});
			} else {
				pool.getConnection((err, con) => {
					if (err) throw err;
			
					con.query(`INSERT INTO customer (customer_id, email, name, password) VALUES (0,'${req.body.email}','${req.body.name}','${req.body.password}')`, function (err, result, fields) {
						con.release();
						if(err) throw err;
			
						signupSessionID(req);
						return res.send({
							userCreate: true,
							user: req.body.email,
							name: req.body.name,
							sessionID: sess.sessionID
						});
					});
				});
			}
		});
	});
});
module.exports = router;