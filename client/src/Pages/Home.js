import React from 'react';
import '../App.css';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import BackgroundHome from '../components/Background-home';

function Home() {
    return(
        <>
        <BackgroundHome />
        <Cards />
        <Footer />
        </>
    );
}

export default Home;