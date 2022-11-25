import React from "react";
import "../App.css";
import Background from "../components/Background-ride";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Updates from "../components/CardNews";
import Maps from "../components/maps";

export default function Ride() {
	return (
		<div>
			<NavBar />
			<Updates />
			<Maps />
			<Background />
			<Footer />
			<input type="hidden" id="startlat" name="startlat" />
			<input type="hidden" id="startlng" name="startlng" />
			<input type="hidden" id="destlat" name="destlat" />
			<input type="hidden" id="destlng" name="destlng" />
			<input type="hidden" id="action" name="action" value="request" />
			<input type="hidden" value="1" id="map_state"></input>
		</div>
	);
}
