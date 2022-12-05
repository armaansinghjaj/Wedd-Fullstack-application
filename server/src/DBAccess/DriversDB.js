const pool = require("../../modules/SQLconnectionpool");
const RideRequests = require("../models/RideRequests");

// CREATE
function startShift(drivers, callback){
    pool.getConnection((err, con) => {
        if (err) {
            con.release();
            callback({
                status: 408,
                message: "Connection timed out. Please try again.",
            }, undefined);
        }

        con.query('INSERT INTO available_drivers (active_driver_session_id, driver_1_id, driver_2_id, car_id, driver_lat, driver_lng) VALUES (?, ?, ?, ?, ?, ?)', [drivers.getSID(), drivers.getD1ID(), drivers.getD2ID(), drivers.getCarID(), drivers.getLatitude(), drivers.getLongitude()], function (err, queryResult, fields) {
            con.release();

            if (err) {
                callback({
                    status: 500,
                    message: "Internal Server Error. Please try again.",
                }, undefined);
            } else{
                callback(undefined, {
                    status: 200,
                    message: "Added successfully to available drivers."
                });
            }
        })
    })
}

// _sid : session id for the drivers

// READ
function getRequests(_sid, callback){
    pool.getConnection((err, con) => {
        if (err) {
            con.release();
            callback({
                status: 408,
                message: "Connection timed out. Please try again.",
            }, undefined);
        }
        
        con.query('SELECT * FROM riderequests WHERE active_driver_session_id = ?', [_sid], function (err, rides, fields) {
            con.release();

            if (err) {
                callback({
                    status: 500,
                    message: "Internal Server Error. Please try again.",
                }, undefined);
            } else{
                if(rides[0] === undefined){
                    callback({
                        status: 404,
                        message: "No rides found"
                    }, undefined);
                }
                else{
                    let rideRequestList = [];
                    rides.map((ride)=>{
                        rideRequestList.push(new RideRequests(ride.active_driver_session_id, ride.request_id, ride.customer_id, ride.name, ride.email, ride.phone, ride.pickup, ride.destination, ride.payment))
                    })
                    callback(undefined, rideRequestList);
                }
            }
        })
    })
}

// DELETE
function endShift(_sid, callback){
    pool.getConnection((err, con) => {
        if (err) {
            con.release();
            callback({
                status: 408,
                message: "Connection timed out. Please try again.",
            }, undefined);
        }
        
        con.query('DELETE FROM riderequests WHERE active_driver_session_id = ?', [_sid], function (err, rides, fields) {
            con.release();

            if (err) {
                callback({
                    status: 500,
                    message: "Internal Server Error. Please try again.",
                }, undefined);
            } else{
                callback(undefined, {
                    status: 200,
                    message: "Driver shift ended."
                });
            }
        })
    })
}

module.exports = {startShift, getRequests, endShift};