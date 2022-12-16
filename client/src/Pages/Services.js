import React from 'react';
import '../App.css';
import Services from '../components/Customer-components/Services-components/Service';
import NavBar from '../components/Customer-components/Navbar-components/NavBar';
import Footer from '../components/Customer-components/Footer-components/Footer';
import Auth from '../components/Common-components/Auth';


function Contact() {
    return (
        <>
          <Auth/>
          <NavBar/>
          <Services/>
          <Footer />
        </>
      )
}
export default Contact; 