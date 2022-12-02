import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Forgot-password.css";

export default function Forgotpassword() {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const setVal = (e) => {
		setEmail(e.target.value);
	};

	const sendLink = (e) => {
		e.preventDefault();
		const forgot_password_data = {
			email: email,
		};
		fetch("/api/forgot", {
			credentials: "same-origin",
			mode: "cors",
			method: "put",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(forgot_password_data),
		})
			.then((response) => response.json())
			.then((responsedata) => {

				if (responsedata.status) {
					setMessage(
						<div className="messageBox">
							{" "}
							<p>Email Sent successfully </p>{" "}
						</div>
					);
				} else {
					setMessage(
						<div className="messageBox">
							{" "}
							<p>Account Not Found </p>{" "}
						</div>
					);
				}
			});
	};

	return (
		<>
			<div className="body">
				<div className="parent">
					<div className="container">
						<form onSubmit={sendLink}>
							<table className="reset_box">
								<tbody>
									<tr>
										<td>
											<table className="messageHead">
												<tbody>
													<tr>
														<td className="headText">Reset Password</td>
													</tr>
												</tbody>
											</table>
											<table className="messageBody">
												<tbody>
													<tr>
														<td className="bodyText">Please enter your email address to search your account.</td>
													</tr>
												</tbody>
												<tbody>
													<tr>
														<td className="bodyPara"></td>
													</tr>
												</tbody>
												<tbody>
													<tr>
														<td>
															<div className="fieldDiv formContainer">
																<input type="email" className="fields" value={email} name="userEmail" placeholder="Email address" onChange={setVal} />
															</div>
															{message && message}
														</td>
													</tr>
												</tbody>
											</table>
											<table className="messageFoot">
												<tbody>
													<tr>
														<td>
															<div className="subFoot">
																<input type="submit" className="reset_pass_btn" value="Send email" />
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
						</form>
					</div>
				</div>
				<div className="loginLinkBox">
					<Link className="loginLink" to="/login">
						Login
					</Link>
				</div>
			</div>
		</>
	);
}
