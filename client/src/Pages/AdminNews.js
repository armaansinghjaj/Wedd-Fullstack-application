import React from 'react';
import '../App.css';
import News from '../components/Admin-News.js'
import AdminNavbar from '../components/AdminNavbar.js'
import Updates from '../components/CardNews';


export default function AdminNews() {
  return (
    <div>
      {/* <AdminNavbar/> */}
      <Updates/>
      <News/>
    </div>
  )
}