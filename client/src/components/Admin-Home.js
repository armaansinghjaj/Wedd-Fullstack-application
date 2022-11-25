import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import '../components/AdminPages.css';
import ProfilePage from './ProfilePage';


export default function AdminHome() {

    return(
        <>
        <div class="AdminHome-container">
            <AdminNavbar/>
            <ProfilePage/>
        </div>
        </>
    )
}