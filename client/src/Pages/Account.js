import React from 'react';
import '../App.css';
import AccountSettings from './AccountSettings';
import AccountNav from '../components/Account-Navbar';



export default function Account() {
  return (
     <div className='Account-container'>
      <AccountNav/> 
        <AccountSettings/>
    </div>
  )
}