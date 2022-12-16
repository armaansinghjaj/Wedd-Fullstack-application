import React from 'react';
import '../App.css';
import NavBar from '../components/Customer-components/Navbar-components/NavBar';
import Footer from '../components/Customer-components/Footer-components/Footer';
import RideForm from '../components/Customer-components/Ridepage-components/Ride-Form/Rideform';
import Auth from '../components/Common-components/Auth';

export default function Ride() {
	return (
		<>
		<div className='ride-page-background'>
		<Auth/>
			<NavBar />
			<RideForm/>
		</div>
		<Footer />
		</>

	);
}
