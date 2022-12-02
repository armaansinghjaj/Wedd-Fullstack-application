const express = require("express");
const router = express.Router();
const loadDefaultValues = require("../modules/loadDefaultValues");
const pool = require("../modules/SQLconnectionpool");
const LoginController = require("../src/controllers/LoginController");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const {text} = require("body-parser");
require("dotenv").config();
const {v4: uuidv4} = require("uuid");
const CustomerController = require("../src/controllers/CustomerController");
const EmployeeController = require("../src/controllers/EmployeeController");

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.MAIL,
		pass: process.env.PASS,
	},
});
router.put("/", (req, res) => {
	LoginController.getByEmail(req.body.email, (error, user) => {
		if (error) {
			return res.status(error.errorDetails.errorCode).send({
				status: false,
			});
		} else {
			user.setResetPasswordUUID(uuidv4());
			if (user.getRoleID() === 3) {
				CustomerController.updateResetUUID(user, (error, result) => {
					if (error) {
						console.log("error", error);
						res.status(401).send({status: 401, message: "email not send"});
					} else {
						const mailOptions = {
							from: process.env.MAIL,
							to: "vaibhavaneja805@gmail.com",
							Subject: "Password Reset Link",
							text: `This link is valid for 24 hours only: http://localhost:3000/forgot/reset/${user.getResetPasswordUUID()}`,
						};

						transporter.sendMail(mailOptions, (error, info) => {
							if (error) {
								console.log("error", error);
								res.status(401).json({status: 401, message: "email not send"});
							} else {
								console.log("Email sent", info.response);
								res.status(201).json({status: 201, message: "Email sent Succsfully"}).send({
									status: true,
								});
							}
						});

						return res.status(200).send({
							status: 200,
							message: "UUID Added to database",
						});
					}
				});
			} else {
				EmployeeController.updateResetUUID(user, (error, result) => {
					if (error) {
						console.log("error", error);
						res.status(401).send({status: 401, message: "email not send"});
					} else {
						const mailOptions = {
							from: process.env.MAIL,
							to: "vaibhavaneja805@gmail.com",
							Subject: "Password Reset Link",
							text: `This link is valid for 24 hours only: http://localhost:3000/forgot/reset/${user.getResetPasswordUUID()}`,
						};

						transporter.sendMail(mailOptions, (error, info) => {
							if (error) {
								console.log("error", error);
								res.status(401).json({status: 401, message: "email not send"});
							} else {
								console.log("Email sent", info.response);
								res.status(201).json({status: 201, message: "Email sent Succsfully"}).send({
									status: true,
								});
							}
						});

						return res.status(200).send({
							status: 200,
							message: "UUID Added to database",
						});
					}
				});
			}
		}
	});
});
router.post("/reset/:token", (req, res) => {
	const {token} = req.params;
	LoginController.getByresetUUID(token, (error, user) => {
		if (error) {
			console.log("error,", error);
		} else {
			if (user.getRoleID() === 3) {
				CustomerController.updatePassword(user.getId(), req.body.newPassword, (error, user) => {
					if (error) {
						res.send({message: "Something Went Wrong."});
					} else {
						res.send({message: "Password changed successfully", status: 200});
					}
				});
			} else {
				EmployeeController.update(user.getId(), user.getEmail(), user.getName(), req.body.newPassword, (error, user) => {
					if (error) {
						res.send({error: error});
					} else {
						res.send({
							message: "Password changed successfully",
							status: 200,
						});
					}
				});
			}
		}
	});
});
module.exports = router;
