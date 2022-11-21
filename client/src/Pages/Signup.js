import React from 'react';
import '../App.css';
import Background from '../components/Background-signup';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Updates from '../components/CardNews';

export default function SignUp() {
  return (
      <div className=''>
        <NavBar/>
        <Updates/>
        <Background />
        <Footer />
      </div>
    )
}