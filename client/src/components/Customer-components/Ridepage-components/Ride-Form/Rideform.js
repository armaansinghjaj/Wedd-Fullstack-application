import React, {useState} from "react";
import {Navigate} from "react-router-dom";
import "./Rideform.css";
//import taxiImg from "../../../../images/taxi.jpg";
import Cookies from "universal-cookie";
import Maps from "../Map/maps";
const cookies = new Cookies();

function Rideform() {
	//Monitors state of input
	const [Name, setName] = useState("");
	const [nameError, setNameError] = useState("");
	const [Email, setEmail] = useState("");
	const [EmailError, setEmailError] = useState("");
	const [Phone, setPhone] = useState("");
	const [PhoneError, setPhoneError] = useState("");
	const [Dropoff, setDropoff] = useState("");
	const [DropoffError, setDropoffError] = useState("");
	const [Pickup, setPickup] = useState("");
	const [PickupError, setPickupError] = useState("");

	const [Payment, setPayment] = useState("");

	// const [Debit, setDebit] = useState("");

	// const [Apple, setApple] = useState("");

	// const [Paypal, setPaypal] = useState("");

	const [PaymentError, setPaymentError] = useState("");

	const handleNameChange = (e) => {
		setNameError("");
		setName(e.target.value);
	};
	const handleEmailChange = (e) => {
		setEmailError("");
		setEmail(e.target.value);
	};
	const handlePhoneChange = (e) => {
		setPhoneError("");
		setPhone(e.target.value);
	};
	const handleDropoffChange = (e) => {
		setDropoffError("");
		setDropoff(e.target.value);
	};
	const handlePickupChange = (e) => {
		setPickupError("");
		setPickup(e.target.value);
	};

	const handlePaymentChange = (e) => {
		setPaymentError("");
		setPayment(e.target.value);
		// setDebit(e.target.value);
		// setPaypal(e.target.value);
		// setApple(e.target.value);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		//checking if Name is empty
		if (Name !== "" ? "" : setNameError("Name required"));

		//checking if Email is empty
		if (Email !== "" ? "" : setEmailError("Email required"));

		//checking if Phone is empty
		if (Phone !== "" ? "" : setPhoneError("Phone number required"));

		//checking if Pickup is empty
		if (Pickup !== "" ? "" : setPickupError("Pickup location required"));

		//checking if Dropoff is empty
		if (Dropoff !== "" ? "" : setDropoffError("Dropoff location required"));

		// checking discount code

		//checking if Payment type is empty
		// if (Credit !== "" && Debit !== "" && Apple !== "" && Paypal !== "" ? "" : setPaymentError("Payment type required"));

		const rideform_data = {
			name: Name,
			email: Email,
			phone: Phone,
			pick: Pickup,
			dest: Dropoff,
			pay_mode: Payment,
		};
		fetch("/api/ride/processing", {
			credentials: "same-origin",
			mode: "cors",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(rideform_data),
		})
			.then((response) => response.json())
			.then((responsedata) => {
				cookies.set("temp_ride_session", responsedata.temp_session_id, {path: "/ride", secure: false, sameSite: "strict"});
				<Navigate to="/ride/confirm" replace={true} />;
			});
	};

	return (
		<>
			{cookies.get("temp_ride_session") && <Navigate to="/ride/confirm" replace={true} />}
			<div className="master-container">
				<figure>
					{/*<img src={taxiImg} className="ride-background-img" alt="ridebackground" />*/}
				</figure>
				<div className="parent-container">
					<div className="ride-conatiner-left child-container">
					<Maps />
					</div>

					<div className="ride-conatiner-right child-container">
						<div className="ride-background">
							<div className="ride-container">
								<form onSubmit={handleFormSubmit}>
									<h1 id="ride-with">Ride With Us</h1>
									<div className="ride-left">
										<h2 id="ride-contact">Contact Information</h2>
										<input placeholder="Name " id="ride-input" type="text" value={Name} onChange={handleNameChange} />
										{nameError && <div className="error-msg">{nameError}</div>}
										<input placeholder="Email " id="ride-input" type="email" value={Email} onChange={handleEmailChange} />
										{EmailError && <div className="error-msg">{EmailError}</div>}
										<input placeholder="Phone number" id="ride-input" type="tel" value={Phone} onChange={handlePhoneChange} />
										{PhoneError && <div className="error-msg">{PhoneError}</div>}
									</div>

									<div className="ride-right">
										<h2 className="ride-location">Location</h2>
										<input className="ride-Paddri" placeholder="Pick-up Location " id="picks" type="text" value={Pickup} onChange={handlePickupChange} />
										<input type="button" value="GPS" id="gps" />
										{PickupError && <div className="error-msg">{PickupError}</div>}
										<input className="ride-Daddri" placeholder="Drop-off Location" id="dest" type="text" value={Dropoff} onChange={handleDropoffChange} />
										{DropoffError && <div className="error-msg">{DropoffError}</div>}
									</div>

									<div className="ride-bottom">
										<h2 className="payment-type">Payment Type:</h2>

										<div className="payment-left">
											<div id="ride-checklist">
												<input type="radio" name="r1" id="ride" className="ride-checklist" value="Cash" onChange={handlePaymentChange} />
												<label id="payment-label" htmlFor="ride">
													Cash
												</label>
											</div>

											<div id="ride-checklist">
												<input type="radio" name="r1" id="ride1" className="ride-checklist" value="Credit" onChange={handlePaymentChange} />
												<label id="payment-label" htmlFor="ride1">
													Credit Card
												</label>
											</div>

											<div id="ride-checklist">
												<input type="radio" name="r1" id="ride3" className="ride-checklist" value="Debit" onChange={handlePaymentChange} />
												<label id="payment-label" htmlFor="ride3">
													Debit card
												</label>
											</div>
										</div>
										<div>{PaymentError && <div className="paymenterror-msg">{PaymentError}</div>}</div>

										<h2 className="car-type">Car Type:</h2>
										<div className="car-left">
											<div id="car-checklist">
												<input type="radio" name="c1" id="car1" className="car-checklist" value="Manual" />
												<label id="car-label" htmlFor="car">
													Manual
												</label>
											</div>

											<div id="car-checklist">
												<input type="radio" name="c1" id="car2" className="car-checklist" value="auto" />
												<label id="car-label1" htmlFor="car1">
													Automatic
												</label>
											</div>
										</div>

										<div className="discount-code-div">
											<input type="text" name="discount_code" id="discount_code" placeholder="Discount code" />
										</div>

										<div className="submit-btn-div">
											<input type="submit" id="ride-submit" value="Submit"></input>
										</div>
									</div>
									<input type="hidden" id="startlat" name="startlat" />
									<input type="hidden" id="startlng" name="startlng" />
									<input type="hidden" id="destlat" name="destlat" />
									<input type="hidden" id="destlng" name="destlng" />
									<input type="hidden" id="action" name="action" value="request" />
									<input type="hidden" value="1" id="map_state"></input>
								</form>
								{/* <div className="map-container">
                <p>ide</p>
                </div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Rideform;
