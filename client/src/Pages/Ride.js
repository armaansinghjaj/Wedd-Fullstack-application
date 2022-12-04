import React from 'react';
import '../App.css';
import NavBar from '../components/Customer-components/Navbar-components/NavBar';
import Footer from '../components/Customer-components/Footer-components/Footer';
import RideForm from '../components/Customer-components/Ridepage-components/Ride-Form/Rideform';

export default function Ride() {
	return (
		<div className='ride-page-background'>
			<NavBar />
			<RideForm/>
			<Footer />
		</div>
	);
}
