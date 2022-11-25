import React from 'react';
import '../App.css';
import Background from '../components/Background-about';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Updates from '../components/CardNews';
import Abouttop from '../components/About-top';

function About() {
  return (
    <div className='about'>
      <NavBar/>
      <Abouttop />
      <Updates/>
      {/* <Background /> */}
      <Footer />
    </div>
  )
}
export default About; 
  
  

