import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar-Background-edit.css';

    export default function AdminNavbar() {

        const [click, setClick] = useState(false);
        const handleClick = () => setClick(!click);
        const closeMobileMenu = () => setClick(false);

        const location = useLocation();

    return(
        <>
        <div className='vertical-navbar'>
            <div id='logo-wrapper'>
                <Link id='vert-logo' to={'/admin'}>WeDD</Link>
            </div>

            <ul className='link-wrapper'>
            <li>
                    <Link className={location.pathname === 'Employeeprofile'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/admin'>Profile</Link>
                </li>
                <li>
                    <Link className={location.pathname === '/admin/driverlist'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/admin/driverlist'>Edit Driver List</Link>
                </li>
                <li>
                    <Link className={location.pathname === '/admin/adminlist'?'Vert-Nav-Links Vert-Nav-Active' : 'Vert-Nav-Links'} to='/admin/adminlist'>Edit Admin list</Link>
                </li>
            </ul>
        </div>
        <div className='logout-wrapper'>
            <Link id='logout-link' to='/logout'>
            <button id='logout-button'>Log Out</button>
            </Link>
        </div>


        <div className='h-navbar'>
            <div id='logo-wrapper'>
                <Link id='h-logo' to={'/admin'}>WeDD</Link>
            </div>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
        </div>
        
        <ul className={click ? ' h-wrapper-active' : 'h-wrapper'}>
                <li>
                    <Link className='h-nav-links' to='/admin/driverlist' onClick={closeMobileMenu}>Edit Driver List</Link>
                </li>
                <li>
                    <Link className='h-nav-links' to='/admin/adminlist' onClick={closeMobileMenu}>Edit Admin list</Link>
                </li>
                <li>
                    <Link className='h-nav-links' to='/logout' onClick={closeMobileMenu}>Log Out</Link>
                </li>
            </ul>
        </>
    )
}