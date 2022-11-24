var mysql = require("mysql");

var pool = mysql.createPool({
	connectionLimit: 100,
	host: "t07cxyau6qg7o5nz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	port: 3306,
	user: "vyagfein4amzelvg",
	password: "p4qa9zjy625f3cbn",
	database: "l04wu7ocit93m8cz",
});

module.exports = pool;