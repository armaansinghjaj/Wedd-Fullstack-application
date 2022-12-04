const express = require("express");
const router = express.Router();
const loadDefaultValues = require("../modules/loadDefaultValues");
const pool = require("../modules/SQLconnectionpool");
const crypto = require("crypto");
const {response} = require("express");

router.get("/", (req, res) => {
	loadDefaultValues(req);
	let sess = req.session;
	if (sess.access != 3) {
		return res.redirect("/login");
	} else if (sess.customer_ride_session_id) {
		return res.render("customer_ride_searching", {
			startlat: sess.startlat,
			startlng: sess.startlng,
			destlat: sess.destlat,
			destlng: sess.destlng,
			h3tags: sess.h3tags,
		});
	}
	return res.render("ride");
});

router.get("/processing", (req, res) => {
	let sess = req.session;
	pool.getConnection((err, con) => {
		if (err) throw err;
		con.query(`SELECT * FROM temp_ride WHERE temp_ride_session = '${sess.temp_session_id}'`, function (err, result, fields) {
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

				return res.send({
					temp_session_id: temp_ride_session_id,
				});
			});
		});
	}
});

router.put("/searching", (req, res) => {
	let sess = req.session;
	if (req.body.customer_id === "" || req.body.name === "" || req.body.email === "" || req.body.phone === "" || req.body.pickup === "" || req.body.destination === "" || req.body.payment === "" || req.body.customer_id === undefined || req.body.name === undefined || req.body.email === undefined || req.body.phone === undefined || req.body.pickup === undefined || req.body.destination === undefined || req.body.payment === undefined) {
		return res.send("error");
	} else {
		let request_id = crypto.randomBytes(8).toString("hex");

		pool.getConnection((err, con) => {
			if (err) throw err;
			con.query(`INSERT INTO riderequests (request_id, customer_id, name, email, phone, pickup, destination, payment) VALUES ('${request_id}','${req.body.customer_id}','${req.body.name}','${req.body.email}','${req.body.phone}','${req.body.pickup}','${req.body.destination}','${req.body.payment}')`, function (err, result, fields) {
				con.release();
				pool.getConnection((err, con) => {
					if (err) throw err;
					con.query(`DELETE FROM temp_ride WHERE temp_ride_session = '${sess.temp_session_id}'`, function (err, result, fields) {
						con.release();

						if (err) return res.send("backend error");
						sess.temp_session_id = null;
					});
				});
				if (err) return console.log(err)
				sess.searching_session_id = request_id;

				return res.send({
					searching_session_id: request_id,
				});
			});
		});
	}
});

router.post("/", (req, res) => {
	let sess = req.session;
	if (sess.access != 3) {
		res.redirect("login");
	} else {
		let name = req.body.name;
		let email = req.body.email;
		let phone = req.body.phone;
		let pick = req.body.pick;
		let destination = req.body.destination;
		let mode_of_payement = req.body.pay_mode;

		if (name === "" || email === "" || phone === "" || pick === "" || destination === "" || mode_of_payement === undefined) {
			res.send("error");
			return;
		} else {
			pool.getConnection((err, con) => {
				if (err) throw err;
				con.query(`INSERT INTO rideRequests (name, email, phone, pickup, destination, payment) VALUES ('${name}','${email}','${phone}','${pick}','${destination}','${mode_of_payement}')`, function (err, result, fields) {
					con.release();
					if (err) throw err;

					// customer_ride_session_id = SESSION VARIABLE TO INDICATE THAT CUSTOMER IS IN RIDE CURRENTLY.
					sess.customer_ride_session_id = crypto.randomBytes(8).toString("hex");

					let startlat = req.body.startlat;
					let startlng = req.body.startlng;
					let destlat = req.body.destlat;
					let destlng = req.body.destlng;
					let h3tags = req.body.h3tags;
					sess.startlat = startlat;
					sess.startlng = startlng;
					sess.destlat = destlat;
					sess.destlng = destlng;
					sess.h3tags = h3tags;
					// console.log(h3tags);
					let distance = h3tags.slice(0, h3tags.indexOf("km"));
					let time = h3tags.slice(h3tags.indexOf("km") + 2, h3tags.indexOf("min"));
					// console.log(h3tags,distance,time,'here');

					res.render("customer_ride_searching", {
						startlat: startlat,
						startlng: startlng,
						destlat: destlat,
						destlng: destlng,
						h3tags: h3tags,
						driver_available: false,
					});
				});
			});
		}
	}
});

module.exports = router;
