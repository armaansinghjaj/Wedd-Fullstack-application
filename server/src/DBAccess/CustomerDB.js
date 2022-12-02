const pool = require("../../modules/SQLconnectionpool");
const Customer = require("../models/Customer");

function getAll(){
    // NOT YET IMPLEMENTED
}

// CREATE
function insert(customer, callback){
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

        con.query('INSERT INTO customer (customer_id, email, name, password) VALUES (?, ?, ?, ?)', [customer.getId(), customer.getEmail(), customer.getName(), customer.getPassword()], function (err, queryResult, fields) {
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
                callback(null, customer);
            }
        })
    })
}

// READ
function getByID(customer_id, callback){
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
        
        con.query('SELECT * FROM customer WHERE customer_id = ?', [customer_id], function (err, users, fields) {
            con.release();

            if (err) {
                callback({
                    error: true,
                    errorDetails: {
                        errorCode: 500,
                        errorMsg: "Internal Server Error. Please try again.",
                    }
                }, null);
            } else{
                if(users[0] === undefined){
                    callback({
                        error: true,
                        errorDetails: {
                            errorCode: 404,
                            errorMsg: "No user found. Please try changing your email and password.",
                        }
                    }, null);
                }
                else{
                    callback(null, new Customer(users[0].customer_id, users[0].email, users[0].name, users[0].password, users[0].role));
                }
            }
        })
    })
}
function getByresetUUID(UUID, callback){
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
        
        con.query('SELECT * FROM customer WHERE reset_password_UUID = ?', [UUID], function (err, users, fields) {
            con.release();

            if (err) {
                callback({
                    error: true,
                    errorDetails: {
                        errorCode: 500,
                        errorMsg: "Internal Server Error. Please try again.",
                    }
                }, null);
            } else{
                if(users[0] === undefined){
                    callback({
                        error: true,
                        errorDetails: {
                            errorCode: 404,
                            errorMsg: "No user found. Please try changing your email and password.",
                        }
                    }, null);
                }
                else{
                    callback(null, new Customer(users[0].customer_id, users[0].email, users[0].name, users[0].password, users[0].role));
                }
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
        
        con.query('SELECT * FROM customer WHERE email = ?', [email], function (err, users, fields) {
            con.release();

            if (err) {
                callback({
                    error: true,
                    errorDetails: {
                        errorCode: 500,
                        errorMsg: "Internal Server Error. Please try again.",
                    }
                }, null);
            } else{
                if(users[0] === undefined){
                    callback({
                        error: true,
                        errorDetails: {
                            errorCode: 404,
                            errorMsg: "No user found. Please try changing your email and password.",
                        }
                    }, null);
                }
                else{
                    callback(null, new Customer(users[0].employee_id, users[0].email, users[0].name, users[0].password, users[0].role));
                }
            }
        })
    })
}

// UPDATE
function updateInfo(customer, callback){

    let put  = {
        email: customer.getEmail(),
        name: customer.getName(),
        car_name: customer.getCarName(),
        home_address: customer.getHomeAddress()
    };

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
        
        con.query('UPDATE customer SET ? WHERE customer_id = ?', [put, customer.getId()], function (err, queryResult, fields) {
            con.release();

            if (err) {
                callback({
                    error: true,
                    errorDetails: {
                        errorCode: 500,
                        errorMsg: "Internal Server Error. Please try again.",
                    }
                }, null);
            } else{
                callback(null, customer);
            }
        })
    })
}
function updateResetUUID(customer, callback){

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
        console.log(customer.getId())
        console.log(customer.getResetPasswordUUID())
        con.query('UPDATE customer SET reset_password_uuid = ? WHERE customer_id = ?', [customer.getResetPasswordUUID(), customer.getId()], function (err, queryResult, fields) {
            con.release();

            if (err) {
                callback({
                    error: true,
                    errorDetails: {
                        errorCode: 500,
                        errorMsg: "Internal Server Error. Please try again.",
                    }
                }, null);
            } else{
                console.log(queryResult);
                callback(null, queryResult);
            }
        })
    })
}
function updatePassword(customer, callback){

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
        
        con.query('UPDATE customer SET password = ?, reset_password_uuid = ? WHERE customer_id = ?', [customer.getPassword(),null, customer.getId()], function (err, queryResult, fields) {
            con.release();

            if (err) {
                callback({
                    error: true,
                    errorDetails: {
                        errorCode: 500,
                        errorMsg: "Internal Server Error. Please try again.",
                    }
                }, null);
            } else{
                callback(null, customer);
            }
        })
    })
}
function updatePicture(customer, callback){

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
        
        con.query('UPDATE customer SET customer_pp = ? WHERE customer_id = ?', [customer.getProfilePicture(), customer.getId()], function (err, queryResult, fields) {
            con.release();

            if (err) {
                callback({
                    error: true,
                    errorDetails: {
                        errorCode: 500,
                        errorMsg: "Internal Server Error. Please try again.",
                    }
                }, null);
            } else{
                callback(null, customer);
            }
        })
    })
}

// DELETE
function remove(customer_id, callback){
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
        
        con.query('DELETE FROM customer WHERE customer_id = ?', [customer_id], function (err, queryResult, fields) {
            con.release();

            if (err) {
                callback({
                    error: true,
                    errorDetails: {
                        errorCode: 500,
                        errorMsg: "Internal Server Error. Please try again.",
                    }
                }, null);
            } else{
                callback(null, customer_id);
            }
        })
    })
}

module.exports = {insert, getByID, getByEmail, updateInfo, updatePicture, updatePassword, remove, updateResetUUID};