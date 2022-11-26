import React from 'react';
import '../App.css';
import AdminNavbar from '../components/Admin-components/Admin-bar'
import EmployeeProfile from '../components/Common-Employees-components/EmployeeProfile';

export default function Admin() {
  return (
    <div className='admin-home-container'>
      <AdminNavbar/>
      <EmployeeProfile/>
    </div>
  )
}