import React from 'react';
import '../App.css';
import News from '../components/Admin-components/Edit-News'
import AdminNavbar from '../components/Admin-components/Admin-bar'
import Updates from '../components/Customer-components/Homepage-components/CardNews';


export default function AdminNews() {
  return (
    <div>
      <AdminNavbar/>
      <Updates/>
      <News/>
    </div>
  )
}