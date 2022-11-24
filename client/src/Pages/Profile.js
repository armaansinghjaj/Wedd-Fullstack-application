import React from 'react';
import '../App.css';
import EmployeeProfile from '../components/EmployeeProfile';
import AdminNavbar from '../components/AdminNavbar.js'

export default function Profile() {
  return (
    <div>
    <AdminNavbar/>
    <EmployeeProfile/>
  </div>
  )
}