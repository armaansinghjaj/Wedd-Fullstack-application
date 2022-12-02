import React from 'react';
import '../App.css';
import News from '../components/Admin-components/Edit-News'
import AdminNavbar from '../components/Admin-components/Admin-bar'



export default function AdminNews() {
  return (
    <div>
      <AdminNavbar/>
      <News/>
    </div>
  )
}