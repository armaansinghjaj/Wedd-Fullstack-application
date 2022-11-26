import React from 'react';
import '../App.css';
import NavBar from '../components/Customer-components/Navbar-components/NavBar';
import Footer from '../components/Customer-components/Footer-components/Footer';
import RideForm from '../components/Customer-components/Ridepage-components/Ride-Form/Rideform';
import Updates from '../components/Customer-components/Homepage-components/CardNews';
import Maps from '../components/Customer-components/Ridepage-components/Map/maps';

export default function Ride() {
	return (
		<div>
			<NavBar />
			<Updates />
			<Maps />
			<RideForm/>
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
