import React from 'react';
import '../App.css';
import Edit from '../components/Admin-components/Edit-Admins'
import AdminNavbar from '../components/Admin-components/Admin-bar'


export default function AdminEdit() {
  return (
    <div>
      <AdminNavbar/>
      <Edit/>
    </div>
  )
}