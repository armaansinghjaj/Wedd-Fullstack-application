import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar-Background-edit.css';

export default function VerticalNavbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
        const location = useLocation();
        console.log(location);

    return(
        <>
        <div className='vertical-navbar'>
            <div id='logo-wrapper'>
                <Link id='vert-logo' to={'/Admin'}>WeDD</Link>
            </div>

            <ul className='link-wrapper'>
                <li>
                    <Link className={location.pathname === '/BackgroundEditHome'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/BackgroundEditHome'>Edit Home Page</Link>
                </li>
                <li>
                    <Link className={location.pathname === '/BackgroundEditAbout'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/BackgroundEditAbout'>Edit About us page</Link>
                </li>
                <li>
                    <Link className={location.pathname === '/BackgroundEditContact'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/BackgroundEditContact'>Edit Contact us page</Link>
                </li>
                <li>
                    <Link className='Vert-Nav-Links' to='/Admin'>Admin home page</Link>
                </li>
            </ul>
        </div>

        <div className='logout-wrapper'>
        <Link id='logout-link' to='/Home'>
            <button id='logout-button'>Log Out</button>
            </Link>
        </div>

        <div className='h-navbar'>
            <div id='logo-wrapper'>
                <Link id='h-logo' to={'/Admin'}>WeDD</Link>
            </div>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
        </div>

            <ul className={click ? ' h-wrapper-active' : 'h-wrapper'}>
                <li>
                    <Link className={'h-nav-links'} to='/BackgroundEditHome' onClick={closeMobileMenu}>Edit Home Page</Link>
                </li>
                <li>
                    <Link className={'h-nav-links'} to='/BackgroundEditAbout' onClick={closeMobileMenu}>Edit About us page</Link>
                </li>
                <li>
                    <Link className={'h-nav-links'} to='/BackgroundEditContact' onClick={closeMobileMenu}>Edit Contact us page</Link>
                </li>
                <li>
                    <Link className='h-nav-links' to='/Admin' onClick={closeMobileMenu}>Admin home page</Link>
                </li>
                <li>
                    <Link className='h-nav-links' to='/Home' onClick={closeMobileMenu}>Log Out</Link>
                </li>
            </ul>


        </>

    )
}