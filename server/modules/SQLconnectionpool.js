var mysql = require("mysql");

var pool = mysql.createPool({
	connectionLimit: 100,
	host: "127.0.0.1",
	port: 3306,
	user: "root",
	password: "password",
	database: "wedddb",
});

module.exports = pool;