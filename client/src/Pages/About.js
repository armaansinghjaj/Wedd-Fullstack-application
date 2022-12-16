import React from 'react';
import '../App.css';
import NavBar from '../components/Customer-components/Navbar-components/NavBar';
import Footer from '../components/Customer-components/Footer-components/Footer';
import Updates from '../components/Customer-components/Homepage-components/CardNews';
import Abouttop from '../components/Customer-components/About-us-components/About-top';
import Auth from '../components/Common-components/Auth';

function About() {
  return (
    <div className='about'>
      <Auth/>
      <NavBar/>
      <Abouttop />
      <Updates/>
      <Footer />
    </div>
  )
}
export default About;