import React from 'react';
import '../App.css';
import NavBar from '../components/Customer-components/Navbar-components/NavBar';
import SignupForm from '../components/Common-components/SignupForm';

export default function SignUp() {
  return (
      <div className=''>
        <NavBar/>
        <SignupForm/>
      </div>
    )
}