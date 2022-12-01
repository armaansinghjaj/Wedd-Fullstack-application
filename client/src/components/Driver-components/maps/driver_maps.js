import React from "react";
import * as LR from "react-leaflet";
import * as G from "leaflet-control-geocoder";
import "leaflet-routing-machine";

import "./driver_maps.css";
import "leaflet/dist/leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "leaflet-routing-machine/dist/leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import L, {Routing} from "leaflet";

function LeafletMaps() {
	let display_pickup = null;
	let display_destination = null;
	var map = LR.useMap();

	display_pickup = document.getElementById("hidden_pickup").value;
	display_destination = document.getElementById("hidden_destination").value;

	let geocoder = G.geocoders.nominatim();
	geocoder.geocode(display_pickup, (results) => {
		var p = results[0];
		console.log(p);
		if (p) {
			display_pickup = p.name;
		}

		geocoder.geocode(display_destination, (results) => {
			var d = results[0];
			if (d) {
				display_destination = d.name;
			}
			if (p && d) {
				Routing.control({
					waypoints: [L.latLng(p.center.lat, p.center.lng), L.latLng(d.center.lat, d.center.lng)],
					draggableWaypoints: false,
					routeWhileDragging: false,
					lineOptions: {
						addWaypoints: false,
					},
				}).addTo(map);
			}
		});
	});
}
export default function Maps() {
	return (
		<>
			<LR.MapContainer center={[51.0447, -114.0719]} id="map_driver" zoom={12}>
				<LR.TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" maxZoom={18}></LR.TileLayer>

				<LeafletMaps />
			</LR.MapContainer>
		</>
	);
}
