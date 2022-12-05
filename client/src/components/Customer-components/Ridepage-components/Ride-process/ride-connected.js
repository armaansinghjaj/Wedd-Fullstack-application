import React, {useEffect, useState} from "react";
import Map from "../Map/maps";
import "./ride-connected.css";
import {Navigate} from "react-router-dom";
import Cookies from "universal-cookie";

export default function RideConnected() {
	const cookie = new Cookies();
	const minutes = "15";
	const [data, setData] = useState({name: "", email: "", phone: "", pickup: "", destination: "", payment: ""});

	function finishRide() {
		cookie.remove("ride_session");
		<Navigate to="/ride/completed" replace={true} />;
		window.location.reload();
	}
	useEffect(() => {
		setData({
			name: "Vaibhav Kumar",
			email: "Vaibhavkumar8001@gmail.com",
			phone: "4446664848",
			pickup: "Southern Alberta Institute of Technology",
			destination: "Castlebrook Way NE",
			payment: "Credit Card",
		});
		
	}, []);

	return (
		<>
			{/* {cookie.get("temp_ride_session") && <Navigate to="/ride/confirm" replace={true} />}
			{cookie.get("searching_session_id") && <Navigate to="/ride/searching" replace={true} />} */}
			{!cookie.get("ride_session") && <Navigate to="/ride/completed" replace={true} />}
    {
        setTimeout(() => {
            finishRide()
		}, 5000)
    }
			<input type="hidden" value={data.name} name="hidden_name" id="hidden_name" />
			<input type="hidden" value={data.email} name="hidden_email" id="hidden_email" />
			<input type="hidden" value={data.phone} name="hidden_phone" id="hidden_phone" />
			<input type="hidden" value={data.pickup} name="hidden_pickup" id="hidden_pickup" />
			<input type="hidden" value={data.destination} name="hidden_destination" id="hidden_destination" />
			<input type="hidden" value="3" id="map_state" />
			<div id="connected-container">
				<Map />

				<div id="wait-container">
					<h1 id="wait-h1">Ride connected!</h1>
					<p id="wait-p">your driver will be here in ~{minutes} minutes.</p>
				</div>
			</div>
		</>
	);
}
