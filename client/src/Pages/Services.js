import React from 'react';
import '../App.css';
import Services from '../components/Customer-components/Services-components/Service';
import NavBar from '../components/Customer-components/Navbar-components/NavBar';
import Footer from '../components/Customer-components/Footer-components/Footer';
import Updates from '../components/Customer-components/Homepage-components/CardNews';


function Contact() {
    return (
        <>
          <NavBar/>
          {/*<Updates/>*/}
          <Services/>
          <Footer />
        </>
      )
}
export default Contact; 