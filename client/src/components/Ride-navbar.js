import React from 'react'
import {Link} from 'react-router-dom';
import './Ride-navbar.css';


function Ridenavbar() {
  return (
    <div id='ride-navbar'>
        <div className="ride-navbar-container">
        <Link className="ride-navbar-logo">WeDD
        </Link>
        </div>
    </div>

  )
}

export default Ridenavbar