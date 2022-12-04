const pool = require("../../modules/SQLconnectionpool");
const Employee = require("../models/Employee");

// CREATE
function insert(employee, callback){
    pool.getConnection((err, con) => {
        if (err) {
            con.release();
            callback({
                status: 408,
                message: "Connection timed out. Please try again.",
            }, undefined);
        }

        con.query('INSERT INTO employee (employee_id, email, name, password, role) VALUES (?, ?, ?, ?, ?)', [employee.getId(), employee.getEmail(), employee.getName(), employee.getPassword(), employee.getRoleID()], function (err, queryResult, fields) {
            con.release();

            if (err) {
                callback({
                    status: 500,
                    message: "Internal Server Error. Please try again.",
                }, undefined);
            } else{
                callback(undefined, {
                    status: 200,
                    message: "User added successfully."
                });
            }
        })
    })
}

// READ
function getAll(callback){
    pool.getConnection((err, con) => {
        if (err) {
            con.release();
            callback({
                status: 408,
                message: "Connection timed out. Please try again.",
            }, undefined);
        }
        
        con.query('SELECT * FROM employee', function (err, users, fields) {
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
                        message: "No user found"
                    }, undefined);
                }
                else{
                    let employeesList = [];
                    users.map((user)=>{
                        employeesList.push(new Employee(user.employee_id, user.email, user.name, user.password, user.role))
                    })
                    callback(undefined, employeesList);
                }
            }
        })
    })
}

function getAllDrivers(callback){
    pool.getConnection((err, con) => {
        if (err) {
            con.release();
            callback({
                status: 408,
                message: "Connection timed out. Please try again.",
            }, undefined);
        }
        
        con.query('SELECT * FROM employee WHERE role = ?', [2], function (err, users, fields) {
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
                        message: "No user found"
                    }, undefined);
                }
                else{
                    let driversList = [];
                    users.map((user)=>{
                        driversList.push(new Employee(user.employee_id, user.email, user.name, user.password, user.role))
                    })
                    callback(undefined, driversList);
                }
            }
        })
    })
}

function getAllAdmins(callback){
    pool.getConnection((err, con) => {
        if (err) {
            con.release();
            callback({
                status: 408,
                message: "Connection timed out. Please try again.",
            }, undefined);
        }
        
        con.query('SELECT * FROM employee WHERE role = ?', [1], function (err, users, fields) {
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
                        message: "No user found"
                    }, undefined);
                }
                else{
                    let adminsList = [];
                    users.map((user)=>{
                        adminsList.push(new Employee(user.employee_id, user.email, user.name, user.password, user.role))
                    })
                    callback(undefined, adminsList);
                }
            }
        })
    })
}

function getByID(employee_id, callback){
    pool.getConnection((err, con) => {
        if (err) {
            con.release();
            callback({
                status: 408,
                message: "Connection timed out. Please try again.",
            }, undefined);
        }
        
        con.query('SELECT * FROM employee WHERE employee_id = ?', [employee_id], function (err, users, fields) {
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
                        message: "No user found"
                    }, undefined);
                }
                else{
                    callback(undefined, new Employee(users[0].employee_id, users[0].email, users[0].name, users[0].password, users[0].role));
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
        
        con.query('SELECT * FROM employee WHERE email = ?', [email], function (err, users, fields) {
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
                        message: "No user found"
                    }, undefined);
                }
                else{
                    callback(undefined, new Employee(users[0].employee_id, users[0].email, users[0].name, users[0].password, users[0].role));
                }
            }
        })
    })
}

// UPDATE
function update(employee, callback) {
	let put = {
		email: employee.getEmail(),
		name: employee.getName(),
		password: employee.getPassword(),
		reset_password_uuid:null,
	};

    pool.getConnection((err, con) => {
        if (err) {
            con.release();
            callback({
                status: 408,
                message: "Connection timed out. Please try again.",
            }, undefined);
        }
        
        con.query('UPDATE employee SET ? WHERE employee_id = ?', [put, employee.getId()], function (err, queryResult, fields) {
            con.release();

            if (err) {
                callback({
                    status: 500,
                    message: "Internal Server Error. Please try again.",
                }, undefined);
            } else{
                callback(undefined, {
                    status: 200,
                    message: "User updated successfully"
                });
            }
        })
    })
}
function updateResetUUID(employee, callback) {
	pool.getConnection((err, con) => {
		if (err) {
			con.release();
			callback(
				{
					error: true,
					errorDetails: {
						errorCode: 408,
						errorMsg: "Connection timed out. Please try again.",
					},
				},
				undefined
			);
		}
		con.query("UPDATE employee SET reset_password_uuid = ? WHERE employee_id = ?", [employee.getResetPasswordUUID(), employee.getId()], function (err, queryResult, fields) {
			con.release();

			if (err) {
				callback(
					{
						error: true,
						errorDetails: {
							errorCode: 500,
							errorMsg: "Internal Server Error. Please try again.",
						},
					},
					undefined
				);
			} else {
				// console.log(queryResult);
				callback(undefined, queryResult);
			}
		});
	});
}
// DELETE
function remove(employee_id, callback){
    pool.getConnection((err, con) => {
        if (err) {
            con.release();
            callback({
                status: 408,
                message: "Connection timed out. Please try again.",
            }, undefined);
        }
        
        con.query('DELETE FROM employee WHERE employee_id = ?', [employee_id], function (err, queryResult, fields) {
            con.release();

            if (err) {
                callback({
                    status: 500,
                    message: "Internal Server Error. Please try again.",
                }, undefined);
            } else{
                callback(undefined, {
                    status: 200,
                    message: "User deleted successfully"
                });
            }
        })
    })
}

module.exports = {getAll, insert, getAllAdmins, getAllDrivers, getByID, getByEmail, update, remove,updateResetUUID};
