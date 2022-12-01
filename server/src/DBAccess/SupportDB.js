const pool = require("../../modules/SQLconnectionpool");
const Support = require("../models/Support");

function insert(support, callback){
    pool.getConnection((err, con) => {
        if (err) {
            con.release();
            callback({
                error: true,
                errorDetails: {
                    errorCode: 408,
                    errorMsg: "Connection timed out. Please try again.",
                }
            }, null);
        }

        con.query('INSERT INTO supportRequests (email, reason, description, comments) VALUES (?, ?, ?, ?)', [support.getEmail(), support.getReason(), support.getDescription(), support.getComments()], function (err, queryResult, fields) {
            con.release();

            if (err) {
                callback({
                    error: true,
                    errorDetails: {
                        errorCode: 500,
                        errorMsg: "Internal Server Error. Please try again.",
                    },
                    err: err
                }, null);
            } else{
                callback(null, {
                    status: 200,
                    message: "Request made to the company. Person from our team will be in touch shortly."
                });
            }
        })
    })
}

function getAll(callback){
    pool.getConnection((err, con) => {
        if (err) {
            con.release();
            callback({
                error: true,
                errorDetails: {
                    errorCode: 408,
                    errorMsg: "Connection timed out. Please try again.",
                }
            }, null);
        }

        con.query('SELECT * FROM supportRequests', function (err, requests, fields) {
            con.release();

            if (err) {
                callback({
                    error: true,
                    errorDetails: {
                        errorCode: 500,
                        errorMsg: "Internal Server Error. Please try again.",
                    },
                    err: err
                }, null);
            } else{
                let listArray = [];
                console.log(requests);
                requests.map(request => {
                    console.log(request);
                    // listArray.push(new Support(request.email, request.reason, request.description, requests.comments));
                })
                // callback(null, listArray);
            }
        })
    })
}

function getByEmail(email, callback){
    pool.getConnection((err, con) => {
        if (err) {
            con.release();
            callback({
                error: true,
                errorDetails: {
                    errorCode: 408,
                    errorMsg: "Connection timed out. Please try again.",
                }
            }, null);
        }

        con.query('SELECT * FROM supportRequests WHERE email = ?', [email], function (err, requests, fields) {
            con.release();

            if (err) {
                callback({
                    error: true,
                    errorDetails: {
                        errorCode: 500,
                        errorMsg: "Internal Server Error. Please try again.",
                    },
                    err: err
                }, null);
            } else{
                let listArray = [];
                console.log(requests);
                requests.map(request => {
                    console.log(request);
                    // listArray.push(new Support(request.email, request.reason, request.description, requests.comments));
                })
                // callback(null, listArray);
            }
        })
    })
}

function remove(email, callback){
    pool.getConnection((err, con) => {
        if (err) {
            con.release();
            callback({
                error: true,
                errorDetails: {
                    errorCode: 408,
                    errorMsg: "Connection timed out. Please try again.",
                }
            }, null);
        }

        con.query('DELETE FROM supportRequests WHERE email = ?', [email], function (err, requests, fields) {
            con.release();

            if (err) {
                callback({
                    error: true,
                    errorDetails: {
                        errorCode: 500,
                        errorMsg: "Internal Server Error. Please try again.",
                    },
                    err: err
                }, null);
            } else{
                callback(null, {
                    status: 200,
                    message: "Support request deleted successfully.",
                });
            }
        })
    })
}

module.exports = {insert, getAll, getByEmail, remove};