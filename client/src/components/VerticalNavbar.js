import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './VerticalNavbar.css';

export default function VerticalNavbar() {
    
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
            {/* <i className="fa-sharp fa-solid fa-right-from-bracket"></i> */}
            </Link>
        </div>

        </>

    )
}