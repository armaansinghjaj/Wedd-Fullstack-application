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
                status: 408,
                message: "Connection timed out. Please try again.",
            }, undefined);
        }

        con.query('INSERT INTO customer (customer_id, email, name, password, salt) VALUES (?, ?, ?, ?)', [customer.getId(), customer.getEmail(), customer.getName(), customer.getPassword(), customer.getSalt()], function (err, queryResult, fields) {
            con.release();

            if (err) {
                callback({
                    status: 500,
                    message: "Internal Server Error. Please try again.",
                }, undefined);
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
                status: 408,
                message: "Connection timed out. Please try again.",
            }, undefined);
        }
        
        con.query('SELECT * FROM customer WHERE customer_id = ?', [customer_id], function (err, users, fields) {
            con.release();

            if (err) {
                callback({
                    status: 500,
                    message: "Internal Server Error. Please try again.",
                }, undefined);
            } else{
                if(users[0] === undefined){
                    callback({
                        status: 404,
                        message: "No user found. Please try changing your email and password.",
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
                status: 408,
                message: "Connection timed out. Please try again.",
            }, undefined);
        }
        
        con.query('SELECT * FROM customer WHERE reset_password_UUID = ?', [UUID], function (err, users, fields) {
            con.release();

            if (err) {
                callback({
                    status: 500,
                    message: "Internal Server Error. Please try again.",
                }, undefined);
            } else{
                if(users[0] === undefined){
                    callback({
                        status: 404,
                        message: "No user found. Please try changing your email and password.",
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
                status: 408,
                message: "Connection timed out. Please try again.",
            }, undefined);
        }
        
        con.query('SELECT * FROM customer WHERE email = ?', [email], function (err, users, fields) {
            con.release();

            if (err) {
                callback({
                    status: 500,
                    message: "Internal Server Error. Please try again.",
                }, undefined);
            } else{
                if(users[0] === undefined){
                    callback({
                        status: 404,
                        message: "No user found. Please try changing your email and password.",
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
                status: 408,
                message: "Connection timed out. Please try again.",
            }, undefined);
        }
        
        con.query('UPDATE customer SET ? WHERE customer_id = ?', [put, customer.getId()], function (err, queryResult, fields) {
            con.release();

            if (err) {
                callback({
                    status: 500,
                    message: "Internal Server Error. Please try again.",
                }, undefined);
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
                status: 408,
                message: "Connection timed out. Please try again.",
            }, undefined);
        }
        con.query('UPDATE customer SET reset_password_uuid = ? WHERE customer_id = ?', [customer.getResetPasswordUUID(), customer.getId()], function (err, queryResult, fields) {
            con.release();

            if (err) {
                callback({
                    status: 500,
                    message: "Internal Server Error. Please try again.",
                }, undefined);
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
                status: 408,
                message: "Connection timed out. Please try again.",
            }, undefined);
        }
        
        con.query('UPDATE customer SET password = ?, reset_password_uuid = ? WHERE customer_id = ?', [customer.getPassword(),null, customer.getId()], function (err, queryResult, fields) {
            con.release();

            if (err) {
                callback({
                    status: 500,
                    message: "Internal Server Error. Please try again.",
                }, undefined);
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
                status: 408,
                message: "Connection timed out. Please try again.",
            }, undefined);
        }
        
        con.query('UPDATE customer SET customer_pp = ? WHERE customer_id = ?', [customer.getProfilePicture(), customer.getId()], function (err, queryResult, fields) {
            con.release();

            if (err) {
                callback({
                    status: 500,
                    message: "Internal Server Error. Please try again.",
                }, undefined);
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
                status: 408,
                message: "Connection timed out. Please try again.",
            }, undefined);
        }
        
        con.query('DELETE FROM customer WHERE customer_id = ?', [customer_id], function (err, queryResult, fields) {
            con.release();

            if (err) {
                callback({
                    status: 500,
                    message: "Internal Server Error. Please try again.",
                }, undefined);
            } else{
                callback(null, customer_id);
            }
        })
    })
}

module.exports = {insert, getByID, getByEmail, updateInfo, updatePicture, updatePassword, remove, updateResetUUID, getByresetUUID};