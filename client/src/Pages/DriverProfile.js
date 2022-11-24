import React from 'react';
import '../App.css';
import DProfile from '../components/Driver-Profile';
import DriverNavbar from '../components/DriverNavbar.js'

export default function DriverProfile() {
  return (
    <div>
    <DriverNavbar/>
    <DProfile/>
  </div>
  )
}