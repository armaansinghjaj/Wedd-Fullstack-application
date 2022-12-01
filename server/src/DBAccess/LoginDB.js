const pool = require("../../modules/SQLconnectionpool");
const Employee = require("../models/Employee");
const Customer = require("../models/Customer");

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
        
        con.query('SELECT customer_id, email, name, password, role FROM customer WHERE email = ? UNION ALL SELECT employee_id, email, name, password, role FROM employee WHERE email = ?', [email, email], function (err, users, fields) {
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
                    callback(null, 
                        (users[0].role === 3) ?
                            (new Customer(users[0].customer_id, users[0].email, users[0].name, users[0].password, users[0].role)):
                            (new Employee(users[0].employee_id, users[0].email, users[0].name, users[0].password, users[0].role))
                    );
                }
            }
        })
    })
}

module.exports = {getByEmail};