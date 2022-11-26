import React from 'react';
import '../App.css';
import Background from '../components/Customer-components/Background-contact';
import NavBar from '../components/Customer-components/Navbar-components/NavBar';
import Footer from '../components/Customer-components/Footer-components/Footer';
import Updates from '../components/Customer-components/Homepage-components/CardNews';


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