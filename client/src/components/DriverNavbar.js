import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './VerticalNavbar.css';


import './VerticalNavbar.css';

    export default function DriverNavbar() {

    const location = useLocation();
    console.log(location);

    return(
        <>
        <div className='vertical-navbar'>
            <div id='logo-wrapper'>
                <Link id='vert-logo' to={'/Driver'}>Wedd</Link>
            </div>

            <ul className='link-wrapper'>
                {/* <li>
                    <Link className={location.pathname === '/Driver'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/Driver'>Start Shift</Link>
                </li> */}
                {/* <li>
                    <Link className={location.pathname === '/DriverDashboard'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/DriverDashboard'>Dashboard</Link>
                </li>
                <li>
                    <Link className={location.pathname === '/DriverAvailRequests'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/DriverAvailRequests'>Driver Requests</Link>
                </li> */}
            </ul>
        </div>
        <div className='logout-wrapper'>
            <Link id='logout-link' to='/Home'>
            <button id='logout-button'>Log Out</button>
            </Link>
        </div>
        </>

    )
}