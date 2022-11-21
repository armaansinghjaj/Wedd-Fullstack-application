import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './VerticalNavbar.css';

    export default function AdminNavbar() {

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
                    <Link className={location.pathname === '/BackgroundEditHome'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/BackgroundEditHome'>Edit Backgrounds</Link>
                </li>
                <li>
                    <Link className={location.pathname === '/DriversEdit'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/DriversEdit'>Edit Driver List</Link>
                </li>
                <li>
                    <Link className={location.pathname === '/AdminEdit'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/AdminEdit'>Edit Admin list</Link>
                </li>
                <li>
                    <Link className={location.pathname === '/AdminRoles'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/AdminRoles'>Edit Employee Roles</Link>
                </li>
                <li>
                    <Link className={location.pathname === '/AdminNews'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/AdminNews'>Edit News updates</Link>
                </li>
                <li>
                    <Link className={location.pathname === '/ContactRequests'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/ContactRequests'>Access Contact Requests</Link>
                </li>
                <li>
                    <Link className={location.pathname === '/RideRequests'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/RideRequests'>Access Ride Requests</Link>
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