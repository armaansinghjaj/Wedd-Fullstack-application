import React from 'react';
import '../App.css';
import Roles from '../components/Admin-components/Edit-Roles'
import AdminNavbar from '../components/Admin-components/Admin-bar'


export default function AdminRoles() {
  return (
    <div>
      <AdminNavbar/>
      <Roles/>
    </div>
  )
}