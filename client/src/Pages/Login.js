import React from 'react';
import '../App.css';
import Background from '../components/Background-login';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Updates from '../components/CardNews';
import LoginForm from '../components/LoginForm'

export default function Login() {
  return (
    <div>
      <NavBar/>
      {/* <Updates/> */}
      <LoginForm/>
      {/* <Footer /> */}
    </div>
  )
}