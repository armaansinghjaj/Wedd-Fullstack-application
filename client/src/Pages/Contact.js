import React from 'react';
import '../App.css';
import Background from '../components/Background-contact';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Updates from '../components/CardNews';


function Contact() {
    return (
        <div>
          <NavBar/>
          <Updates/>
          <Background />
          <Footer />
        </div>
      )
}
export default Contact; 