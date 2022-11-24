import React from 'react';
import '../App.css';
import Edit from '../components/Admin-Edit'
import AdminNavbar from '../components/AdminNavbar.js'


export default function AdminEdit() {
  return (
    <div>
      <AdminNavbar/>
      <Edit/>
    </div>
  )
}