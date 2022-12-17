const express = require("express");
const router = express.Router();
const loadDefaultValues = require("../modules/loadDefaultValues");
const pool = require("../modules/SQLconnectionpool");
const crypto = require("crypto");
const {response} = require("express");
const geolib = require("geolib");
require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.MAIL,
		pass: process.env.PASS,
	},
});

router.get("/", (req, res) => {
	loadDefaultValues(req);
	let sess = req.session;
	if (sess.access != 3) {
		return res.redirect("/login");
	} else if (sess.customer_ride_session_id) {
		return res.render("customer_ride_searching", {});
	}
	return res.render("ride");
});

router.get("/processing", (req, res) => {
	let sess = req.session;
	pool.getConnection((err, con) => {
		if (err) throw err;
		con.query(`SELECT name,email,phone,pickup,destination,payment FROM temp_ride WHERE temp_ride_session = '${sess.temp_session_id}'`, function (err, result, fields) {
			con.release();
			if (err) return res.send("backend error");
			return res.send(result[0]);
		});
	});
});

router.post("/processing", (req, res) => {
	let sess = req.session;
	if (req.body.name === "" || req.body.email === "" || req.body.phone === "" || req.body.pick === "" || req.body.dest === "" || req.body.pay_mode === "") {
		return res.send("error");
	} else {
		let temp_ride_session_id = crypto.randomBytes(8).toString("hex");
		pool.getConnection((err, con) => {
			if (err) throw err;
			con.query(`INSERT INTO temp_ride (temp_ride_session, name, email, phone, pickup, destination, payment) VALUES ('${temp_ride_session_id}','${req.body.name}','${req.body.email}','${req.body.phone}','${req.body.pick}','${req.body.dest}','${req.body.pay_mode}')`, function (err, result, fields) {
				con.release();

				if (err) return res.send("backend error");

				sess.temp_session_id = temp_ride_session_id;
				sess.customer_lat = req.body.picklat;
				sess.customer_lng = req.body.picklng;
				return res.send({
					temp_session_id: temp_ride_session_id,
				});
			});
		});
	}

	// const mailOptions = {
	// 	from: process.env.MAIL,
	// 	to: process.env.MAIL,
	// 	Subject: "NEW RIDE REQUEST",
	// 	text: `Name: ${req.body.name} \nEmail: ${req.body.email}\nPhone number: ${req.body.phone}\nPickup: ${req.body.pick}\nDestination: ${req.body.dest}\nMode of Payment: ${req.body.pay_mode}`,
	// };

	// transporter.sendMail(mailOptions, (error, info) => {
	// 	if (error) {
	// 		console.log("error", error);
	// 		res.status(401).send("error");
	// 	} else {
	// 		console.log("Email sent", info.response);
	// 		res.send({status: true});
	// 	}
	// });
});

router.post("/searching", (req, res) => {
	let sess = req.session;
	pool.getConnection((err, con) => {
		if (err) throw err;
		con.query(`SELECT * FROM current_rides WHERE customer_id = '${req.body.customer_id}'`, function (err, result, fields) {
			con.release();
			if (err) return res.send("backend error");
			if (result[0]) {
				sess.ride_session = sess.searching_session_id;
				sess.searching_session_id = null;
				return res.send({
					ride_session: sess.ride_session,
				});
			}
		});
	});
});

router.put("/searching", (req, res) => {//press confirm button
	let sess = req.session;
	if (req.body.customer_id === "" || req.body.name === "" || req.body.email === "" || req.body.phone === "" || req.body.pickup === "" || req.body.destination === "" || req.body.payment === "" || req.body.customer_id === undefined || req.body.name === undefined || req.body.email === undefined || req.body.phone === undefined || req.body.pickup === undefined || req.body.destination === undefined || req.body.payment === undefined) {
		return res.send("error");
	} else {
		let request_id = crypto.randomBytes(8).toString("hex");
		pool.getConnection((err, con) => {
			if (err) throw err;
			con.query(`INSERT INTO rideRequests (request_id, customer_id, name, email, phone, pickup, destination, payment) VALUES ('${request_id}','${req.body.customer_id}','${req.body.name}','${req.body.email}','${req.body.phone}','${req.body.pickup}','${req.body.destination}','${req.body.payment}')`, function (err, result, fields) {
				con.release();
				pool.getConnection((err, con) => {
					if (err) throw err;
					con.query(`DELETE FROM temp_ride WHERE temp_ride_session = '${sess.temp_session_id}'`, function (err, result, fields) {
						con.release();

						if (err) return res.send("backend error");
						sess.temp_session_id = null;
					});
				});
				if (err) return console.log(err);
				sess.searching_session_id = request_id;
				return res.send({
					searching_session_id: request_id,
				});
			});
		});
	}
});

router.post("/connected", (req, res) => {
	let sess = req.session;
	pool.getConnection((err, con) => {
		if (err) throw err;
		con.query(`Select * from current_rides WHERE ride_id = '${req.body.ride_session}'`, function (err, result, fields) {
			con.release();

			if (err) return res.send("backend error");
			if (result[0]){
				res.send(result[0])
			}
		});
	});
});
// router.post("/", (req, res) => {
// 	let sess = req.session;
// 	if (sess.access != 3) {
// 		res.redirect("login");
// 	} else {
// 		let name = req.body.name;
// 		let email = req.body.email;
// 		let phone = req.body.phone;
// 		let pick = req.body.pick;
// 		let destination = req.body.destination;
// 		let mode_of_payement = req.body.pay_mode;

// 		if (name === "" || email === "" || phone === "" || pick === "" || destination === "" || mode_of_payement === undefined) {
// 			res.send("error");
// 			return;
// 		} else {
// 			pool.getConnection((err, con) => {
// 				if (err) throw err;
// 				con.query(`INSERT INTO rideRequests (name, email, phone, pickup, destination, payment) VALUES ('${name}','${email}','${phone}','${pick}','${destination}','${mode_of_payement}')`, function (err, result, fields) {
// 					con.release();
// 					if (err) throw err;

// 					// customer_ride_session_id = SESSION VARIABLE TO INDICATE THAT CUSTOMER IS IN RIDE CURRENTLY.
// 					sess.customer_ride_session_id = crypto.randomBytes(8).toString("hex");

// 					let startlat = req.body.startlat;
// 					let startlng = req.body.startlng;
// 					let destlat = req.body.destlat;
// 					let destlng = req.body.destlng;
// 					let h3tags = req.body.h3tags;
// 					sess.startlat = startlat;
// 					sess.startlng = startlng;
// 					sess.destlat = destlat;
// 					sess.destlng = destlng;
// 					sess.h3tags = h3tags;
// 					// console.log(h3tags);
// 					let distance = h3tags.slice(0, h3tags.indexOf("km"));
// 					let time = h3tags.slice(h3tags.indexOf("km") + 2, h3tags.indexOf("min"));
// 					// console.log(h3tags,distance,time,'here');

// 					res.render("customer_ride_searching", {
// 						startlat: startlat,
// 						startlng: startlng,
// 						destlat: destlat,
// 						destlng: destlng,
// 						h3tags: h3tags,
// 						driver_available: false,
// 					});
// 				});
// 			});
// 		}
// 	}
// });

module.exports = router;
