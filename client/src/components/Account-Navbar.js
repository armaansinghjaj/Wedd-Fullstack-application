import React from "react";
import { Link, useLocation } from 'react-router-dom';
import ProfilePage from "./ProfilePage";
import './Account-Navbar.css';

export default function AccountNavbar() {

    const location = useLocation();
    console.log(location);  

    return(
            <>
                <div className='vertical-navbar'>
                    <div id='logo-wrapper'>
                        <ProfilePage/>
                    </div>

                    <ul className='link-wrapper'>
                        <li>
                            <Link className={location.pathname === '/Account'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/Account'>Settings and Profile</Link>
                        </li>
                        <li>
                            <Link className={location.pathname === '/TripHistory'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/TripHistory'>Trip History</Link>
                        </li>
                        <li>
                            <Link className={location.pathname === '/HelpAndSupport'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/HelpAndSupport'>Help and Support</Link>
                        </li>
                        <li>
                            <Link className={location.pathname === '/FAQ'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/FAQ'>Frequently Asked Questions</Link>
                        </li>

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