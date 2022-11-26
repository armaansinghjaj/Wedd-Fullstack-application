import React from 'react';
import '../App.css';
import Background from '../components/Background-signup';
import NavBar from '../components/NavBar';
import SignupForm from '../components/SignupForm';
import Footer from '../components/Footer';
import Updates from '../components/CardNews';

export default function SignUp() {
  return (
      <div className=''>
        <NavBar/>
        {/* <Updates/> */}
        <SignupForm/>
        {/* <Footer /> */}
      </div>
    )
}