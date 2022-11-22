const express = require("express");
const router = express.Router();
const loadDefaultValues = require("../modules/loadDefaultValues");
const pool = require("../modules/SQLconnectionpool");

router.get("/", (req, res) => {
    loadDefaultValues(req);
	// pool.getConnection((err, con) => {
	// 	if (err) throw err;
	// 	con.query(`SELECT * FROM background`, function (err, result, fields) {
	// 		con.release();
	// 		if(err) throw err;
	// 		res.render("about", {
	// 			year: new Date().getFullYear(),
	// 			title: "About us",
	// 			about_image: result[0].about_page,
	// 		});
	// 	});
	// });

	const str ={
            "h1": "We know transportation.",
            "abouth1": "400+ communities depend on us for it!",
            "para1": "At We DD, we believe there is a better way to transport people. In fact, we believe there is a better way to lead a franchise. What we do is transport people using two unique services. Chauffeur and shuttle. How we do it is part of the secret sauce. We DD has grown to over 400 communities in two countries by out-caring the competition. This is due in part, to the fact that we have local franchise owners that hire the best Chauffeurs to drive and provide service. This is also due to our governance model. At We DD, we are focused as much on the people, our franchises, as we are on the profit. The franchises in turn are focused on their people, the Chauffeurs and the customer. As a result, we make transportation affordable,accessible and convenient.",
            "para2": "The team at WeDD understands that anything worthwhile doing takes hard work, commitment and dedication. This translates into exceptional customer experiences, strongly performing franchises and exciting opportunities.",
            "para3": "With plans to expand globally, Driverseat continues to disrupt the transportation industry while offering consistent, care-focused solutions to its clients, franchisees and business partners."
        };
    res.send(str);
});

module.exports = router;