import React, {useEffect, useState} from "react";
import Maps from "../Map/maps";
import Loading from "./Loader";
import Cookie from "universal-cookie";
import {Navigate} from "react-router-dom";

export default function RideConfirm() {
	const cookie = new Cookie();
	const [Loader, setLoader] = useState(false);
	const [data, setData] = useState({name: "", email: "", phone: "", pickup: "", destination: "", payment:""});

	useEffect(() => {
		setLoader(true);
		fetch("/api/ride/processing")
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoader(false);
			});
			// setData({
			// 	name: "Vaibhav Kumar",
			// 	email: "Vaibhavkumar8001@gmail.com",
			// 	phone: "4446664848",
			// 	pickup: "Southern Alberta Institute of Technology",
			// 	destination: "Castlebrook Way NE",
			// 	payment: "Credit Card"
			// })
	}, []);

	const handleConfirmRideForm = (e) => {
		e.preventDefault();

		const rideConfirm_data = {
			customer_id: cookie.get("__sid"),
			name: data.name,
			email: data.email,
			phone: data.phone,
			pickup: data.pickup,
			destination: data.destination,
			payment: data.payment,
		};
		fetch(`/api/ride/searching`, {
			credentials: "same-origin",
			mode: "cors",
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(rideConfirm_data),
		})
			.then((rideConfirm_response) => rideConfirm_response.json())
			.then((rideConfirm_response) => {
				cookie.set("searching_session_id", rideConfirm_response.request_id, {path: "/ride", secure: false, sameSite: "strict"});
				cookie.remove("temp_ride_session");
				window.location.reload();
			});
	};

	if (Loader) {
		return <Loading />;
	}

	return (
		<>
			{cookie.get("searching_session_id") && <Navigate to="/ride/searching" replace={true} />}
			{!cookie.get("temp_ride_session") && <Navigate to="/ride" replace={true} />}
			<input type="hidden" value={data.name} name="hidden_name" id="hidden_name" />
			<input type="hidden" value={data.email} name="hidden_email" id="hidden_email" />
			<input type="hidden" value={data.phone} name="hidden_phone" id="hidden_phone" />
			<input type="hidden" value={data.pickup} name="hidden_pickup" id="hidden_pickup" />
			<input type="hidden" value={data.destination} name="hidden_destination" id="hidden_destination" />
			<input type="hidden" value="2" id="map_state" />
			routing success
			<div id="map_div">
				<Maps />
				<div id="estimate"></div>
			</div>
			<div id="info_div">
				Please check these details
				<br />
				<div id="details"></div>
			</div>
			<form onSubmit={handleConfirmRideForm}>
				<div id="confirm_container"></div>
			</form>
			<div id="buttons">
				<button id="get_map">Confirm</button>
			</div>
			<form>
				<input type="submit" value="Reset" />
			</form>
		</>
	);
}
