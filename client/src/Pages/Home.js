import React from 'react';
import '../App.css';
import NavBar from '../components/Customer-components/Navbar-components/NavBar';
import Cards from '../components/Customer-components/Homepage-components/Cards';
import BackgroundHome from '../components/Customer-components/Background-home';
import Footer from '../components/Customer-components/Footer-components/Footer';
import Auth from '../components/Common-components/Auth';


function Home() {
    return(
        <>
        <Auth/>
        <NavBar/>
        <BackgroundHome />
        <Cards />
        <Footer />
        </>
    );
}

export default Home;