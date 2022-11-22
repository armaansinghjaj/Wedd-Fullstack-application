import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './VerticalNavbar.css';

    export default function AdminNavbar() {

    const location = useLocation();

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
                    <Link className={location.pathname === '/admin/driverlist'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/admin/driverlist'>Edit Driver List</Link>
                </li>
                <li>
                    <Link className={location.pathname === '/admin/adminlist'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/admin/adminlist'>Edit Admin list</Link>
                </li>
                <li>
                    <Link className={location.pathname === '/admin/roles'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/admin/roles'>Edit Employee Roles</Link>
                </li>
                <li>
                    <Link className={location.pathname === '/admin/news'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/admin/news'>Edit News updates</Link>
                </li>
                <li>
                    <Link className={location.pathname === '/admin/services'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/admin/services'>Access Contact Requests</Link>
                </li>
                <li>
                    <Link className={location.pathname === '/admin/rides'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/admin/rides'>Access Ride Requests</Link>
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