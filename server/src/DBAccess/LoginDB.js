const pool = require("../../modules/SQLconnectionpool");
const Employee = require("../models/Employee");
const Customer = require("../models/Customer");

function getByEmail(email, callback) {
	pool.getConnection((err, con) => {
		if (err) {
            con.release();
            callback({
                status: 408,
                message: "Connection timed out. Please try again.",
            }, undefined);
        }

		con.query("SELECT customer_id, email, name, password, role FROM customer WHERE email = ? UNION ALL SELECT employee_id, email, name, password, role FROM employee WHERE email = ?", [email, email], function (err, users, fields) {
			con.release();

			if (err) {
				callback({
                    status: 500,
                    message: "Internal Server Error. Please try again.",
                }, undefined);
			} else {
				if (users[0] === undefined) {
					callback({
						status: 404,
						message: "Please try changing your credentials.",
					},null);
				} else {
					callback(null, 
						(users[0].role === 3)?
						(new Customer(users[0].customer_id, users[0].email, users[0].name, users[0].password, users[0].role)) : 
						(new Employee(users[0].customer_id, users[0].email, users[0].name, users[0].password, users[0].role)));
				}
			}
		});
	});
}
function getByResetUUID(resetUUID, callback) {
	pool.getConnection((err, con) => {
		if (err) {
            con.release();
            callback({
                status: 408,
                message: "Connection timed out. Please try again.",
            }, undefined);
        }

		con.query("SELECT customer_id, email, name, password, role FROM customer WHERE reset_password_uuid = ? UNION ALL SELECT employee_id, email, name, password, role FROM employee WHERE reset_password_uuid = ?", [resetUUID, resetUUID], function (err, users, fields) {
			con.release();

			if (err) {
				callback({
                    status: 500,
                    message: "Internal Server Error. Please try again.",
                }, undefined);
			} else {
				if (users[0] === undefined) {
					callback({
						status: 404,
						message: "Please try changing your credentials.",
					},null);
				} else {
					callback(null, 
						(users[0].role === 3)?
						(new Customer(users[0].customer_id, users[0].email, users[0].name, users[0].password, users[0].role)) : 
						(new Employee(users[0].customer_id, users[0].email, users[0].name, users[0].password, users[0].role)));
				}
			}
		});
	});
}
module.exports = {getByEmail, getByResetUUID};
