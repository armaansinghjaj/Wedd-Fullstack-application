import React, {useState} from "react";
import {Link} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import "./Forgot-password.css";
import {Navigate} from "react-router-dom";

export default function Forgotpassword() {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const setVal = (e) => {
		setEmail(e.target.value);
	};

	const sendLink = async (e) => {
		e.preventDefault();

		const res = await fetch("/sendpasswordlink", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({email}),
		});

		const data = await res.json();

		if (data.status == 201) {
			setEmail("");
			setMessage(true);
		} else {
			toast.error("Invalid user");
		}
		const handleFormSubmit = (e) => {
			const forgot_password_data = {
				email: email,
			};
			fetch("/api/forgot", {
				credentials: "same-origin",
				mode: "cors",
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(forgot_password_data),
			})
				.then((response) => response.json())
				.then((responsedata) => {
					<Navigate to="/ride/confirm" replace={true} />;
				});
		};
	};

	return (
		<>
			<div className="body">
				<div className="parent">
					<div className="container">
						<form action="reset" method="POST">
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
															<div className="messageBox">
																<p></p>
															</div>
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
					<Link className="loginLink" href="login">
						Login
					</Link>
				</div>
			</div>
		</>
	);
}
