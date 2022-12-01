const express = require("express");
const router = express.Router();
const loadDefaultValues = require("../modules/loadDefaultValues");
const pool = require("../modules/SQLconnectionpool");

// router.get("/", (req, res) => {
//     loadDefaultValues(req);

//     let sess = req.session;

//     if (sess.access != 2) {
//         return res.redirect("/");
//     }

//     if (sess.ride_allocated_session_id) {
//         // if driver is active and is currently driving
//         return pool.getConnection((err, con) => {
//             if (err) throw err;
//             con.query(`SELECT * FROM current_rides WHERE ride_allocated_session_id = '${sess.ride_allocated_session_id}'`, function (err, result, fields) {
//                 con.release();

//                 if (err) throw err; // remove on build
//                 return res.render("driver_dash-drive", {driver: "Driver", pickup_address: "46 Taravista", drop_address: "52 Del ray"});
//             });
//         });
//     } else if (sess.driver_session_id) {
//         // if driver is active, but has not rides
//         let result = {
//             rides: undefined,
//         };
//         return pool.getConnection((err, con) => {
//             if (err) throw err;

//             con.query(`SELECT * FROM riderequests`, function (err, d_ride_requests, fields) {
//                 con.release();

//                 if (err) throw err; // remove on build

//                 result.rides = d_ride_requests;
//                 return res.render("driver_dash-avail_requests", result);
//             });
//         });
//     } else {
//         return res.render("driver_dashboard");
//     }
// });
router.post("/", (req, res) => {
	let sess = req.session;

	pool.getConnection((err, con) => {
		if (err) throw err;
		con.query(`SELECT * FROM temp_ride WHERE temp_ride_session = '${sess.temp_session_id}'`, function (err, result, fields) {
			con.release();

			if (err) return res.send("backend error");
			console.log(result);
			return res.send(result[0]);
		});
	});
});

module.exports = router;
