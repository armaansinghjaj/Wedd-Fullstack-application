import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";
import "./ResetPassword.css";

const ResetPassword = () => {
	const {token} = useParams();
	const [newPassword, setNewPassword] = useState("");
	const [output, setOutput] = useState("");

	const setValPass = (e) => {
		setNewPassword(e.target.value);
	};

	const changePassword = async (e) => {
		e.preventDefault();
		const password_data = {
			newPassword: newPassword,
		};
		const res = await fetch(`/api/forgot/reset/${token}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(password_data),
		})
			.then((response) => response.json())
			.then((responsedata) => {
				console.log(responsedata)
				if (responsedata.status) {
					setOutput(
						<div className="messageBox">
							{" "}
							<p>Password changed successfully</p>{" "}
						</div>
					);
				} else {
					setOutput(
						<div className="messageBox">
							{" "}
							<p>Something went wrong</p>{" "}
						</div>
					);
				}
			});
	};

	return (
		<>
			{/* ******************************************* */}
			<div className="body">
				<div className="parent">
					<div className="container">
						<form onSubmit={changePassword}>
							<table className="reset_box">
								<tbody>
									<tr>
										<td>
											<table className="messageHead">
												<tbody>
													<tr>
														<td className="headText">Enter New Password</td>
													</tr>
												</tbody>
											</table>
											<table className="messageBody">
												<tbody>
													<tr>
														<td className="bodyPara"></td>
													</tr>
												</tbody>
												<tbody>
													<tr>
														<td>
															<div className="fieldDiv formContainer">
																<input type="Password" className="fields" value={newPassword} name="newPassword" placeholder="New Password" onChange={setValPass} />
															</div>
															{output && output}
														</td>
													</tr>
												</tbody>
											</table>
											<table className="messageFoot">
												<tbody>
													<tr>
														<td>
															<div className="subFoot">
																<input type="submit" className="reset_pass_btn" value="Reset" />
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
								<tbody className="loginLinkBox">
									<tr>
										<td>
											<Link className="loginLink" to="/" replace>
												Home
											</Link>
										</td>
									</tr>
								</tbody>
							</table>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default ResetPassword;
