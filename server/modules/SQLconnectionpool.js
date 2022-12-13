var mysql = require("mysql");

var pool = mysql.createPool({
	host: "n1nlmysql29plsk.secureserver.net",
	port: 3306,
	user: "user_admin",
	password: "W&kp51x2",
	database: "admin",
});

module.exports = pool;