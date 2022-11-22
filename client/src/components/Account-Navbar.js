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
                            <Link className={location.pathname === '/profile'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/profile'>Settings and Profile</Link>
                        </li>
                        <li>
                            <Link className={location.pathname === '/triphistory'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/triphistory'>Trip History</Link>
                        </li>
                        <li>
                            <Link className={location.pathname === '/helpandsupport'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/helpandsupport'>Help and Support</Link>
                        </li>
                        <li>
                            <Link className={location.pathname === '/faq'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/faq'>Frequently Asked Questions</Link>
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