import React from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import Cards from '../components/Cards';
import BackgroundHome from '../components/Background-home';
import Footer from '../components/Footer';
import Updates from '../components/CardNews';


function Home() {
    return(
        
        <>
        <NavBar/>
        <Updates/>
        <BackgroundHome />
        <Cards />
        <Footer />
        </>
    );
}

export default Home;