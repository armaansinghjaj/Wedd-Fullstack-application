import React, {useEffect, useState} from "react";
import Maps from "../Map/maps";

export default function RideConfirm() {
	useEffect(() => {
		fetchData();
	}, []);

	const [data, setData] = useState([]);

	const fetchData = async () => {
		const result_data = await fetch("/api/ride/processing");
		const data_items = await result_data.json();
		setData(data_items);
	};

	return (
		<>
			<input type="hidden" value={data.name} name="hidden_name" id="hidden_name" />
			<input type="hidden" value={data.email} name="hidden_email" id="hidden_email" />
			<input type="hidden" value={data.phone} name="hidden_phone" id="hidden_phone" />
			<input type="hidden" value={data.pickup} name="hidden_pickup" id="hidden_pickup" />
			<input type="hidden" value={data.destination} name="hidden_destination" id="hidden_destination" />
			<input type="hidden" value="2" id="map_state" />
			routing success
			<div id="map_div">
				<Maps></Maps>
				<div id="estimate">
					<button id="getquote">Get Quote</button>
				</div>
			</div>
			<div id="info_div">
				Please check these details
				<br />
				<div id="details"></div>
			</div>
			<div id="buttons">
				<button id="get_map">Confirm</button>
				<br />
				<form action="ride">
					<input type="submit" value="Reset" />
				</form>
			</div>
		</>
	);
}
