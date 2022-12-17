const express = require("express");
const router = express.Router();
const loadDefaultValues = require("../modules/loadDefaultValues");
const pool = require("../modules/SQLconnectionpool");
const crypto = require("crypto");
const DriverController = require("../src/controllers/DriverController");

router.get("/", (req, res) => {
	loadDefaultValues(req);

	let sess = req.session;

	if (sess.access != 2) {
		return res.redirect("/");
	}

	if (sess.ride_allocated_session_id) {
		// if driver is active and is currently driving
		return pool.getConnection((err, con) => {
			if (err) throw err;
			con.query(`SELECT * FROM current_rides WHERE ride_allocated_session_id = '${sess.ride_allocated_session_id}'`, function (err, result, fields) {
				con.release();

				if (err) throw err; // remove on build
				// return res.render("driver_dash-drive", {driver: "Driver", pickup_address: "46 Taravista", drop_address: "52 Del ray"});
			});
		});
	} else if (sess.driver_session_id) {
		// if driver is active, but has not rides
		let result = {
			rides: undefined,
		};
		return pool.getConnection((err, con) => {
			if (err) throw err;

			con.query(`SELECT * FROM riderequests`, function (err, d_ride_requests, fields) {
				con.release();

				if (err) throw err; // remove on build

				result.rides = d_ride_requests;
				return res.status(200).send(result);
				// return res.render("driver_dash-avail_requests", result);
			});
		});
	} else {
		return res.status(200).send({
			status: 200,
			message: "You are at the homepage",
		});
		// return res.render("driver_dashboard");
	}
});

router.put("/:action", (req, res) => {
	let sess = req.session;

	if (sess.access != 2) {
		return res.status(403).send({
			status: 403,
			message: "Access denied.",
		});
	}

	if (req.params.action === "start") {
		const drivers_session_id = crypto.randomBytes(8).toString("hex"); // 16 character long random value

		sess.drivers_session_id = drivers_session_id;

		DriverController.startShift(drivers_session_id, req.body.driver_1_id, req.body.driver_2_id, req.body.car_id, req.body.lat, req.body.lon, (error, result) => {
			if (error) {
				return res.status(error.status).send(error);
			} else {
				return res.status(200).send(result);
			}
		});
	} else if (req.params.action === "end") {
		DriverController.endShift(sess.drivers_session_id, (error, result) => {
			if (error) {
				return res.status(error.status).send(error);
			} else {
				sess.drivers_session_id = undefined;
				return res.status(200).send(result);
			}
		});
	} else if (req.params.action === "racc") {
		if (sess.ride_allocated_session_id) {
			pool.getConnection((err, con) => {
				if (err) throw err;
				con.query(`SELECT * FROM current_rides WHERE ride_allocated_session_id = '${sess.ride_allocated_session_id}'`, function (err, result, fields) {
					con.release();

					if (err) throw err; // remove on build
					return res.render("driver_dash-drive", {driver: "Driver", pickup_address: "46 Taravista", drop_address: "52 Del ray"});
				});
			});
		} else {
			pool.getConnection((err, con) => {
				if (err) throw err;

				let ride_allocated_session_id = crypto.randomBytes(8).toString("hex");
				con.query(`INSERT INTO current_rides (ride_allocated_session_id, driver_1_id, driver_2_id, car_id, customer_id, pickup_location, drop_location, distance, est_time, est_cost) VALUES ('${ride_allocated_session_id}', ${req.query.did1}, ${req.query.did2}, ${req.query.dcid}, ${req.query.cid}, '${req.query.pic}', '${req.query.drp}', ${req.query.dst}, ${req.query.etd}, ${req.query.ect})`, function (err, result, fields) {
					con.release();

					if (err) throw err; // remove on build

					// If driver successfully accepts the request, remove the drivers from available drivers
					pool.getConnection((err, con) => {
						if (err) throw err;

						con.query(`DELETE FROM available_drivers WHERE active_driver_session_id = '${sess.driver_session_id}'`, function (err, result, fields) {
							con.release();
							if (err) throw err; // remove on build

							sess.ride_allocated_session_id = ride_allocated_session_id;
							return res.render("driver_dash-drive", {driver: "Driver", pickup_address: "46 Taravista", drop_address: "52 Del ray"});
						});
					});
				});
			});
		}
	} else if (req.query.daction === "rdec") {
		// TO-DO, YET TO IMPLEMENT
	}
});

router.put("/processing", (req, res) => {
	let sess = req.session;
	pool.getConnection((err, con) => {
		if (err) throw err;
		con.query(`SELECT * FROM current_rides WHERE active_driver_session_id = '${sess.ride_allocated_session_id}'`, function (err, result, fields) {
			con.release();

			if (err) return res.send("backend error");
			return res.send(result[0]);
		});
	});
});
router.put("/searching", (req, res) => {
	let sess = req.session;
	console.log("yes")
	pool.getConnection((err, con) => {
		if (err) throw err;
		con.query(`Select * from  current_rides WHERE active_driver_session_id = '${req.body.driver_session_id}' `, function (err, result, fields) {
			con.release();
			if (err) return res.send("backend error");
			if (result[0]){
				return res.send(result[0].ride_id)
			}
		});
	});
});
router.put("/complete", (req, res) => {
	let sess = req.session;
	pool.getConnection((err, con) => {
		if (err) throw err;
		con.query(`DELETE from current_rides WHERE active_driver_session_id = '${req.body.driver_session_id}' `, function (err, result, fields) {
			con.release();
			if (err) return res.send("backend error");
		});
	});
});


module.exports = router;
