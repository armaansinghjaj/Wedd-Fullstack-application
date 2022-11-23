import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './VerticalNavbar.css';

    export default function AdminNavbar() {

        const [click, setClick] = useState(false);
        const handleClick = () => setClick(!click);
        const closeMobileMenu = () => setClick(false);

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


        <div className='h-navbar'>
            <div id='logo-wrapper'>
                <Link id='vert-logo' to={'/Admin'}>WeDD</Link>
            </div>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
        </div>
        
        <ul className={click ? ' h-wrapper-active' : 'h-wrapper'}>
                <li>
                    <Link className='h-nav-links' to='/BackgroundEditHome' onClick={closeMobileMenu}>Edit Backgrounds</Link>
                </li>
                <li>
                    <Link className='h-nav-links' to='/admin/driverlist' onClick={closeMobileMenu}>Edit Driver List</Link>
                </li>
                <li>
                    <Link className='h-nav-links' to='/admin/adminlist' onClick={closeMobileMenu}>Edit Admin list</Link>
                </li>
                <li>
                    <Link className='h-nav-links' to='/admin/roles' onClick={closeMobileMenu}>Edit Employee Roles</Link>
                </li>
                <li>
                    <Link className='h-nav-links' to='/admin/news' onClick={closeMobileMenu}>Edit News updates</Link>
                </li>
                <li>
                    <Link className='h-nav-links' to='/admin/services' onClick={closeMobileMenu}>Access Contact Requests</Link>
                </li>
                <li>
                    <Link className='h-nav-links' to='/admin/rides' onClick={closeMobileMenu}>Access Ride Requests</Link>
                </li>
            </ul>



        </>

    )
}