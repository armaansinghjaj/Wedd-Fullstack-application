import React, {useState} from "react";
import {useNavigate} from "react-router";
import {Navigate} from "react-router-dom";
import "./Rideform.css";
import * as G from "leaflet-control-geocoder";
//import taxiImg from "../../../../images/taxi.jpg";
import Cookies from "universal-cookie";
import Maps from "../Map/maps";
import Sent from "../Ride-process/request-sent";

function Rideform() {

	const cookies = new Cookies();

	//Monitors state of input
	const [Name, setName] = useState("");
	const [nameError, setNameError] = useState("");
	const [Email, setEmail] = useState("");
	const [EmailError, setEmailError] = useState("");
	const [Phone, setPhone] = useState("");
	const [PhoneError, setPhoneError] = useState("");
	const [Dropoff, setDropoff] = useState((cookies.get("form_pick")?cookies.get("form_drop"):""));
	const [DropoffError, setDropoffError] = useState("");
	const [Pickup, setPickup] = useState((cookies.get("form_pick")?cookies.get("form_pick"):""));
	const [PickupError, setPickupError] = useState("");
	const [Payment, setPayment] = useState("");
	const [PaymentError, setPaymentError] = useState("");
	const [Pickuplat, setPickuplat] = useState("");
	const [Pickuplng, setPickuplng] = useState("");

	const [redirectLogin, setRedirectLogin] = useState(false);

	let move = useNavigate();

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
	};

	const gps = async () => {
		let userlocationlat = document.getElementById("userlat").value;
		let userlocationlng = document.getElementById("userlng").value;
		var url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + userlocationlat + "&lon=" + userlocationlng;

		const response = await fetch(url);
		const str = await response.text();
		setPickup(JSON.parse(str).display_name);
	};
	const pickupCoordinates = () => {
		let pickuplocation = Pickup;

		let geocoder = G.geocoders.nominatim();
		geocoder.geocode(Pickup, (results) => {
			var pickupResult = results[0];
			setPickuplat(pickupResult.center.lat);
			setPickuplat(pickupResult.center.lng);
		});
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if(cookies.get("__sid") !== undefined){
			if(Name === "" || Email === "" || Phone === "" || Pickup === "" || Dropoff === ""){

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
				} else {
					pickupCoordinates();
					const rideform_data = {
						name: Name,
						email: Email,
						phone: Phone,
						pick: Pickup,
						dest: Dropoff,
						pay_mode: Payment,
						picklat: Pickuplat,
						picklng: Pickuplng,
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
							if (responsedata.status === 200) {
								// cookies.set("temp_ride_session", responsedata.temp_session_id, {path: "/ride", secure: false, sameSite: "strict"});
								if (responsedata.status) window.alert("Request sent");
							}
							else {
								console.log("error")
							}
						});
				}
		} else {
			setRedirectLogin(true);
		}
	};

	return (
		<>
			{(redirectLogin === true)?(<Navigate replace to="/login"/>):""}
			{/* {cookies.get("temp_ride_session") && <Navigate to="/ride/confirm" replace={true} />}
			{cookies.get("searching_session_id") && <Navigate to="/ride/searching" replace={true} />} */}
			<input type="hidden" id="userlat" />
			<input type="hidden" id="userlng" />

			<div className="parent-container">
				{/* Map div */}
				<div className="ride-container-left">
					<Maps />
				</div>

				<div className="ride-form-container">
					<form id="ride-form" onSubmit={handleFormSubmit}>
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
							<input className="ride-pickup-address" placeholder="Pick-up Location " id="ride-input" type="text" value={Pickup} onChange={handlePickupChange} />
							<div className="suggestions"></div>
							{PickupError && <div className="error-msg">{PickupError}</div>}
							<input className="ride-dropoff-address" placeholder="Drop-off Location" id="ride-input" type="text" value={Dropoff} onChange={handleDropoffChange} />
							{DropoffError && <div className="error-msg">{DropoffError}</div>}
							<br />
							<input type="button" value="GPS" id="gps" onClick={gps} />
						</div>

						<div className="ride-bottom">
							<div className="checklist-left">
								<h2 className="payment-type">Payment Type:</h2>
								<div id="ride-checklist">
									<div id="checklist-item">
										<input type="radio" name="r1" id="ride" className="ride-checklist" value="Cash" onChange={handlePaymentChange} />
										<label id="payment-label" htmlFor="ride">
											Cash
										</label>
									</div>
									<div id="checklist-item">
										<input type="radio" name="r1" id="ride1" className="ride-checklist" value="Credit" onChange={handlePaymentChange} />
										<label id="payment-label" htmlFor="ride1">
											Credit Card
										</label>
									</div>
									<div id="checklist-item">
										<input type="radio" name="r1" id="ride2" className="ride-checklist" value="Debit" onChange={handlePaymentChange} />
										<label id="payment-label" htmlFor="ride2">
											Debit card
										</label>
									</div>
								</div>
							</div>
							<div>{PaymentError && <div className="paymenterror-msg">{PaymentError}</div>}</div>

							<div className="checklist-right">
								<h2 className="car-type">Car Type:</h2>
								<div id="car-checklist">
									<div id="checklist-item">
										<input type="radio" name="c1" id="car1" className="car-checklist" value="Manual" />
										<label id="car-label" htmlFor="car1">
											Manual
										</label>
									</div>
									<div id="checklist-item">
										<input type="radio" name="c1" id="car2" className="car-checklist" value="auto" />
										<label id="car-label1" htmlFor="car2">
											Automatic
										</label>
									</div>
								</div>
							</div>

							<div className="submit-div">
								<br />
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
				</div>
			</div>
		</>
	);
}

export default Rideform;
