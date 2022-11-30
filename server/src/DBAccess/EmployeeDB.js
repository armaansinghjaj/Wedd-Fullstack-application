const pool = require("../../modules/SQLconnectionpool");
const Employee = require("../models/Employee");

function getAll(){
    // NOT YET IMPLEMENTED
}

// CREATE
function insert(employee, callback){
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

        con.query('INSERT INTO employee (employee_id, email, name, password, role) VALUES (?, ?, ?, ?, ?)', [employee.getId(), employee.getEmail(), employee.getName(), employee.getPassword(), , employee.getRoleID()], function (err, queryResult, fields) {
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
                callback(null, employee);
            }
        })
    })
}

// READ
function getByID(employee_id, callback){
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
        
        con.query('SELECT * FROM employee WHERE employee_id = ?', [employee_id], function (err, users, fields) {
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
                    callback(null, new Employee(users[0].employee_id, users[0].email, users[0].name, users[0].password, users[0].role));
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
        
        con.query('SELECT * FROM employee WHERE email = ?', [email], function (err, users, fields) {
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
                    callback(null, new Employee(users[0].employee_id, users[0].email, users[0].name, users[0].password, users[0].role));
                }
            }
        })
    })
}

// UPDATE
function update(employee, callback){

    let put  = {
        employee_pp: employee.getProfilePicture(),
        email: employee.getEmail(),
        name: employee.getName(),
        password: employee.getPassword(),
        car_name: employee.getCarName(),
        home_address: employee.getHomeAddress()
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
        
        con.query('UPDATE employee SET ? WHERE employee_id = ?', [put, employee.getId()], function (err, queryResult, fields) {
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
                callback(null, employee);
            }
        })
    })
}

// DELETE
function remove(employee_id, callback){
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
        
        con.query('DELETE FROM employee WHERE employee_id = ?', [employee_id], function (err, queryResult, fields) {
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
                callback(null, employee_id);
            }
        })
    })
}

module.exports = {insert, getByID, getByEmail, update, remove};