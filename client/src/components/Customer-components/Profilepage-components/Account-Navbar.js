import React, {useState, useEffect} from "react";
import { Link, useLocation } from 'react-router-dom';
// import ProfilePage from "./ProfilePage";
import './Account-Navbar.css';

export default function AccountNavbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const location = useLocation();
    console.log(location);  

    return(
            <>
                <div className='vertical-navbar'>
                    <div id='logo-wrapper'>
                        {/* <ProfilePage/> */}
                        <Link id='vert-logo' to={'/account'}>WeDD</Link>
                    </div>
                    

                    <ul className='link-wrapper'>
                        <li>
                            <Link className={location.pathname === '/Account'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/Account'>Settings and Profile</Link>
                        </li>
                        <li>
                            <Link className={location.pathname === '/helpandsupport'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/helpandsupport'>Help and Support</Link>
                        </li>
                        {/* <li>
                            <Link className={location.pathname === '/faq'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/faq'>Frequently Asked Questions</Link>
                        </li> */}
                    </ul>
                </div>
                <div className='logout-wrapper'>
                    <Link id='logout-link' to='/logout'>
                    <button id='logout-button'>Log Out</button>
                    </Link>
                </div>

                <div className='h-navbar'>
                    <div id='logo-wrapper'>
                        <Link id='h-profile' to={'/profile'}>WeDD</Link>
                    </div>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>

                <ul className={click ? ' h-wrapper-active' : 'h-wrapper'}>
                        <li>
                            <Link className={'h-nav-links'} to='/Account' onClick={closeMobileMenu}>Settings and Profile</Link>
                        </li>
                        <li>
                            <Link className={'h-nav-links'} to='/helpandsupport' onClick={closeMobileMenu}>Help and Support</Link>
                        </li>
                        {/* <li>
                            <Link className={'h-nav-links'} to='/faq' onClick={closeMobileMenu}>Frequently Asked Questions</Link>
                        </li> */}
                        <li>
                            <Link className={'h-nav-links'} to='/logout' onClick={closeMobileMenu}>Log Out</Link>
                        </li>
                </ul>


            </>
    )
}