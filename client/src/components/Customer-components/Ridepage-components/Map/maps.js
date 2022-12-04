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
		geocoder.geocode(document.getElementById("hidden_pickup").value, (results) => {
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
					})
						.addTo(map)
						.on("routesfound", function (e) {
							var routes = e.routes;
							var summary = routes[0].summary;
							let distance = Math.round(summary.totalDistance / 1000);
							let minutes = Math.round((summary.totalTime % 3600) / 60);
							let price = 28 + distance * 1.25 + minutes * 0.8;
							document.getElementById("estimate").innerHTML = "Estimate: " + price + "$ (This is just an estimate the price may change)";
							// e.waypoints[0].dragging.disable();
							// e.waypoints[1].dragging.disable();
							console.log(e);
						});
				}
			});
		});
	}

	if (document.getElementById("map_state").value === "1") {
		document.getElementById("userlat").value= userlocationlat;
		document.getElementById("userlng").value= userlocationlng;
		G.geocoder().addTo(map);

		if (!navigator.geolocation) {
			console.log("Your browser doesn't support geolocation feature!");
		} else {
			navigator.geolocation.getCurrentPosition(getPosition);
		}
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
			document.getElementById("buttons").innerHTML = '';
			document.getElementById("confirm_container").innerHTML = '<input type="submit" value="Confirm">';
		});
	}
	if (document.getElementById("map_state").value === "3") {
		let geocoder = G.geocoders.nominatim();
		geocoder.geocode(document.getElementById("hidden_pickup").value, (results) => {
			var p = results[0];
			console.log(p);
			if (p) {
				display_pickup = p.name;
			}

			geocoder.geocode(document.getElementById("hidden_destination").value, (results) => {


				var d = results[0];
				console.log(d);
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
}
export default function Maps() {
	return (
		<>
			<LR.MapContainer center={[51.0447, -114.0719]} id="map" style={{height: "50vh", width: "50vw"}} zoom={12}>
				<LR.TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" maxZoom={17}></LR.TileLayer>

				<LeafletMaps />
			</LR.MapContainer>
		</>
	);
}
