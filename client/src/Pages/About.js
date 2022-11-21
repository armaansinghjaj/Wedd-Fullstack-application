import React from 'react';
import '../App.css';
import Background from '../components/Background-about';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Updates from '../components/CardNews';

function About() {
  return (
    <div className='about'>
      <NavBar/>
      <Updates/>
      <Background />
      <Footer />
    </div>
  )
}
export default About; 
  
  

