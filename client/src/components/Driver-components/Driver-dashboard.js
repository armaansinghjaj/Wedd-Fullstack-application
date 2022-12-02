import React, {useState, useEffect} from "react";
import "./Driver-dashboard.css";
import Map from "./maps/driver_maps";

export default function Requests() {
	const pickupAddress = "Pickup Address";
	const dropoffAddress = "Dropoff Address";

	const [visibleMap, setVisibleMap] = useState(false);
	const [Loader, setLoader] = useState(false);
	const [data, setData] = useState({name: "", email: "", phone: "", pickup: "", destination: ""});
	useEffect(() => {
		setLoader(true);
		fetch("/api/driver/processing")
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
	}, []);

	const displayMap = () => {
		setVisibleMap(!visibleMap);
	};

	return (
		<>
			<input type="hidden" value={data.pickup_location} name="hidden_pickup" id="hidden_pickup" />
			<input type="hidden" value={data.drop_location} name="hidden_destination" id="hidden_destination" />
			<input type="hidden" value="3" id="map_state" />
			<div id="Driverdash-container">
				<div id="dashboard-wrapper">
					<h2 id="dashboard-h2">Your ride</h2>

					<table id="dashboard-table">
						<tbody>
							<tr>
								<th id="dashboard-table-th">FROM</th>
								<th id="dashboard-table-th">TO</th>
							</tr>
							<tr>
								<td id="dashboard-table-td">{pickupAddress}</td>
								<td id="dashboard-table-td">{dropoffAddress}</td>
							</tr>
						</tbody>
					</table>
					<div className="starter">
						{/* <p>Slide to drive</p>
                        <p><input type="range" value="0" className="pullee"/></p> */}

						<div id="buttons">
							<p>
								<button id="dashboard-show-map" onClick={displayMap}>
									Show map
								</button>
							</p>
							<form action="/DriverAvailRequests">
								<input type="submit" id="dashboard-complete-ride" value="Complete Ride" />
							</form>
							<form action="/DriverAvailRequests">
								<input type="submit" id="dashboard-cancel-ride" value="Cancel Ride" />
							</form>
						</div>
					</div>
					<div className={"map"}>
						{/* <span id="map_section">MAP HERE</span> */}
						<div id={visibleMap ? "map_placeholder" : "map_hidden"}>
							<Map />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
