import React from 'react';
import '../App.css';
import Background from '../components/Background-ride';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Updates from '../components/CardNews';

export default function Ride() {

  
  return (
    <div>
      <NavBar/>
      <Updates/>
      <Background />
      <Footer />
    </div>
  )
}