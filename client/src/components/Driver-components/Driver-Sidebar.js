import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProfilePage from '../Customer-components/Profilepage-components/ProfilePage';
import '../Admin-components/Sidebar-Background-edit.css';

    export default function DriverNavbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const location = useLocation();
    // console.log(location);

    return(
        <>
        <div className='vertical-navbar'>
            <div id='logo-wrapper'>
                <Link id='vert-logo' to={'/driver'}>WeDD</Link>
            </div>
        </div>

        <ul className='driver-link-wrapper'>
            <li>
                    <Link className={location.pathname === 'Driver-Profile'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/Driver-Profile'>Profile</Link>
                </li>
                <li>
                    <Link className={location.pathname === '/DriverDashboard'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/DriverDashboard'>Start Shift</Link>
                </li>

            </ul>
        <div className='logout-wrapper'>

            <Link id='logout-link' to='/Home'>
            <button id='logout-button'>Log Out</button>
            </Link>
        </div>

        <div className='h-navbar'>
            <div id='logo-wrapper'>
                <Link id='h-profile' to={'/Admin'}>Driver Name</Link>
            </div>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
        </div>
        <ul className={click ? ' h-wrapper-active' : 'h-wrapper'}>
            <li>
                <Link className='h-nav-links' to='/driver-profile' onClick={closeMobileMenu}>Profile</Link>
            </li>
            <li>
                <Link className='h-nav-links' to='/Home' onClick={closeMobileMenu}>Log Out</Link>
            </li>
        </ul>


        </>

    )
}