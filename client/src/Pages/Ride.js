import React from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import RideForm from '../components/Rideform';
import Updates from '../components/CardNews';

export default function Ride() {
  
  return (
    <div>
      <NavBar/>
      <Updates/>
      <RideForm/>
      <Footer />
    </div>
  )
}