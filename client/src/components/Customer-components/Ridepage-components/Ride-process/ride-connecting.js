import React, {useEffect, useState} from "react";
import Cookies from "universal-cookie";
import Loader from "../../../Common-components/Load-animation";
import Map from "../Map/maps";
import "./ride-connecting.css";
import { Navigate } from "react-router-dom";

export default function RideConnecting() {
	const cookie = new Cookies();

	useEffect(() => {
		let customer_id = Number(cookie.get("__sid"));
		const searching_data = {
			customer_id: customer_id,
		};
		fetch("/api/ride/searching", {
			credentials: "same-origin",
			mode: "cors",
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(searching_data),
		})
			.then((response) => response.json())
			.then((responsedata) => {
                if(responsedata)
                {   
                    cookie.set("ride_session", responsedata.ride_session, {path: "/ride", secure: false, sameSite: "strict"});
                    cookie.remove("searching_session_id");
			        window.location.reload();
                } 
				
			});
	}, []);

	return (
		<>
			{cookie.get("temp_ride_session") && <Navigate to="/ride/confirm" replace={true} />}
			{cookie.get("ride_session") && <Navigate to="/ride/connected" replace={true} />}
			{!cookie.get("searching_session_id") && <Navigate to="/ride" replace={true} />}


			<div id="connect-container">
				<input type="hidden" value="3" id="map_state" />

				<div className="quotation_block" id="quotation"></div>
				<div id="loading-screen">
					<p id="please-wait">Please wait while we are connecting you to your drivers...</p>
					<p id="mobile-please-wait">Searching for drivers...</p>
					<br />
					<p id="appreciate">Thank you for your patience!</p>
					<div id="load-symbol">
						<Loader />
					</div>
				</div>
			</div>
		</>
	);
}
