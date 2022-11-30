import React from 'react';
import '../App.css';
import AdminDriversEdit from '../components/Admin-components/Edit-Drivers'
import AdminNavbar from '../components/Admin-components/Admin-bar';


export default function DriversEdit() {
  return (
    <div id='driver-edit-background'>
      <AdminNavbar/>
      <AdminDriversEdit/>
    </div>
  )
}