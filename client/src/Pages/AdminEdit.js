import React from 'react';
import Edit from '../components/Admin-components/Edit-Admins'
import AdminNavbar from '../components/Admin-components/Admin-bar'
import '../components/Admin-components/Edit-admin.css'



export default function AdminEdit() {
  return (
    <div id='edit-admin-list'>
      <AdminNavbar/>
      <Edit/>
    </div>
  )
}