import React from "react";
import * as LR from "react-leaflet";
import * as G from "leaflet-control-geocoder";
import "leaflet-routing-machine";

import "./map.css";
import "leaflet/dist/leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "leaflet-routing-machine/dist/leaflet-routing-machine";
import L, {Routing} from "leaflet";
var marker, circle, lat, long, accuracy;
let userlocationlat = null;
let userlocationlng = null;
let display_pickup = null;
let display_destination = null;

function LeafletMaps() {
	var map = LR.useMap();

	G.geocoder().addTo(map);

	if (!navigator.geolocation) {
		console.log("Your browser doesn't support geolocation feature!");
	} else {
		navigator.geolocation.getCurrentPosition(getPosition);
	}

	function getPosition(position) {
		lat = position.coords.latitude;
		long = position.coords.longitude;
		accuracy = position.coords.accuracy;

		if (marker) {
			map.removeLayer(marker);
		}

		if (circle) {
			map.removeLayer(circle);
		}

		marker = L.marker([lat, long]);
		circle = L.circle([lat, long], {radius: accuracy});

		var featureGroup = L.featureGroup([marker, circle]).addTo(map);

		map.fitBounds(featureGroup.getBounds());

		userlocationlat = lat;
		userlocationlng = long;
	}

	function addRoute() {
		let geocoder = G.geocoders.nominatim();
		var r = geocoder.geocode(display_pickup, (results) => {
			var p = results[0];
			display_pickup = p.name
			geocoder.geocode(display_destination, (results) => {
				var d = results[0];
				display_destination = p.name
				Routing.control({
					waypoints: [L.latLng(p.center.lat, p.center.lng), L.latLng(d.center.lat, d.center.lng)],
				}).addTo(map);
			});
		});
	}

	if (document.getElementById("map_state").value === "1") {
		document.getElementById("gps").addEventListener("click", () => {
			var url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + userlocationlat + "&lon=" + userlocationlng;
			// var xmldoc = null;
			return fetch(url)
				.then((response) => response.text())
				.then((str) => {
					document.getElementById("picks").value = JSON.parse(str).display_name;
				});
		});
	}
	if (document.getElementById("map_state").value === "2") {
		let display_name = document.getElementById("hidden_name").value;
		let display_email = document.getElementById("hidden_email").value;
		let display_phone = document.getElementById("hidden_phone").value;
		display_pickup = document.getElementById("hidden_pickup").value;
		display_destination = document.getElementById("hidden_destination").value;
		addRoute();
		document.getElementById("details").innerHTML = "Name: " + display_name + "<br>Email: " + display_email + "<br>Phone number: " + display_phone + "<br>Pick-up Address: " + display_pickup + " <br>Destination: " + display_destination;

		document.getElementById("get_map").addEventListener("click", () => {
			document.getElementById("map_div").style.visibility = "visible";
			document.getElementById("info_div").style.visibility = "hidden";
			document.getElementById("buttons").innerHTML = '<form method = "post"> <input type="submit" value="Confirm"> <input type="hidden" value="confirm" name="action"> </form> <br> <form action="ride"><input type="submit" value="Reset"></form>';
		});

		document.getElementById("getquote").addEventListener("click", () => {
			let h3tag;
			h3tag = document.getElementsByTagName("h3")[0].innerHTML;
			let distance = parseFloat(h3tag.slice(0, h3tag.indexOf("km") - 1));
			let hours = 0;
			let minutes = 0;
			if (h3tag.indexOf("h") <= 0) {
				minutes = parseFloat(h3tag.slice(h3tag.indexOf("km") + 4, h3tag.indexOf("min") - 1));
			} else if (h3tag.indexOf("min") <= 0) {
				hours = parseFloat(h3tag.slice(h3tag.indexOf("km") + 4, h3tag.indexOf("h") - 1));
			} else {
				hours = parseFloat(h3tag.slice(h3tag.indexOf("km") + 4, h3tag.indexOf("h") - 1));
				minutes = parseFloat(h3tag.slice(h3tag.indexOf("h") + 2, h3tag.indexOf("min") - 1));
			}
			minutes += hours * 60;
			let price = 28 + distance * 1.25 + minutes * 0.8;
			document.getElementById("estimate").innerHTML = "Estimate: " + price + "$ (This is just an estimate the price may change)";
		});
	}
	if (document.getElementById("map_state").value === "3") {
		addRoute();
		document.getElementById("map_state").value = "0";
	}
}

export default function maps() {
	return (
		<>
			<LR.MapContainer center={[51.0447, -114.0719]} id="map" style={{height: "50vh", width: "50vw"}} zoom={12}>
				<LR.TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" maxZoom={17}></LR.TileLayer>

				<LeafletMaps />
			</LR.MapContainer>
		</>
	);
}
