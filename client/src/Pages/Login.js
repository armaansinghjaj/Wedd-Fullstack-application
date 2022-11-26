import React from 'react';
import '../App.css';
import NavBar from '../components/Customer-components/Navbar-components/NavBar';
import LoginForm from '../components/Common-components/LoginForm'

export default function Login() {
  return (
    <div>
      <NavBar/>
      <LoginForm/>
    </div>
  )
}