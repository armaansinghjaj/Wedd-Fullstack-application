import React, {useEffect, useState} from "react";
import Maps from "../Map/maps";
import Loading from "./Loader";

export default function RideConfirm() {
	const [Loader, setLoader] = useState(false);
	const [data, setData] = useState({name: "", email: "", phone: "", pickup: "", destination: ""});
	useEffect(() => {
		setLoader(true);
		fetch("/api/ride/processing")
			.then((res)=>res.json())
			.then((data)=>{
				setData(data);
			})
			.catch((err)=>{
				console.log(err);
			})
			.finally(()=>{
				setLoader(false);
			});
		// const result_data = 
		// const data_items = result_data.json();
		

		
	}, []);
	if(Loader){
		return<Loading/>;
	}

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
				<div id="estimate"></div>
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
