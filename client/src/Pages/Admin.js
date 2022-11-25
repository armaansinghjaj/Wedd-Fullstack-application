import React from 'react';
import '../App.css';
import AdminNavbar from '../components/AdminNavbar.js'
import EmployeeProfile from '../components/EmployeeProfile';


export default function Admin() {
  return (
    <div className='admin-home-container'>
      <AdminNavbar/>
      <EmployeeProfile/>
    </div>
  )
}