import React from 'react';
import '../App.css';
import DProfile from '../components/Driver-components/Driver-Profile';
import DriverNavbar from '../components/Driver-components/Driver-Sidebar'

export default function DriverProfile() {
  return (
    <div id='driver-home-background'>
      <DriverNavbar/>
      <DProfile/>
    </div>
  )
}