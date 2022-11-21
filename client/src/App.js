
import * as React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Ride from './Pages/Ride';
import Admin from './Pages/Admin';

//Driver Page
import Driver from './Pages/Driver';
import DriverDashboard from './Pages/DriverDashboard';
import DriverRequests from './Pages/DriverAvailRequests';

// Admin pages
import AdminEdit from './Pages/AdminEdit';
import AdminNews from './Pages/AdminNews';
import AdminRoles from './Pages/AdminRoles';
import DriversEdit from './Pages/DriversEdit';
import ContactRequests from './Pages/ContactRequests';
import AdminRideRequests from './Pages/RideRequests';

// Background edit pages
import BgHome from './components/BackgroundEditHome';
import BgAbout from './components/BackgroundEditAbout';
import BgContact from './components/BackgroundEditContact'

// Customer account pages
import Account from './Pages/Account';
import TripHistory from './Pages/TripHistory';
import HelpAndSupport from './Pages/HelpAndSupport';
import FaQuestions from './Pages/FAQ';

const App = () => {
  
  return (
    <>
      <Router>
       {/* Routing for application */}
      <Routes>
        <Route path= "*" element={<Home />}/>
        <Route path= '/Ride'  element={<Ride/>}/> 
        <Route path= '/About'  element={<About/>}/> 
        <Route path= '/Contact'  element={<Contact/>}/> 
        <Route path= '/Login'  element={<Login/>}/> 
        <Route path= '/Signup'  element={<Signup/>}/>

        {/* Admin Pages */}
        <Route path= '/Admin'  element={<Admin/>}/> 
        <Route path= '/AdminEdit'  element={<AdminEdit/>}/> 
        <Route path= '/AdminNews'  element={<AdminNews/>}/> 
        <Route path= '/AdminRoles'  element={<AdminRoles/>}/> 
        <Route path= '/DriversEdit'  element={<DriversEdit/>}/> 
        <Route path= '/ContactRequests' element={<ContactRequests/>}/>
        <Route path= '/RideRequests' element={<AdminRideRequests/>}/>

        {/* Background editing pages */}
        <Route path='/BackgroundEditHome' element={<BgHome/>}/>
        <Route path='/BackgroundEditAbout' element={<BgAbout/>}/>
        <Route path='/BackgroundEditContact' element={<BgContact/>}/>

        {/* Driver dashboard pages */}
        <Route path= '/Driver'  element={<Driver/>}/> 
        <Route path= '/DriverDashboard'  element={<DriverDashboard/>}/>
        <Route path= '/DriverAvailRequests'  element={<DriverRequests/>}/> 


        {/* Customer account pages */}
        <Route path= '/Account'  element={<Account/>}/>        
        <Route path= '/TripHistory'  element={<TripHistory/>}/>
        <Route path= '/HelpAndSupport'  element={<HelpAndSupport/>}/>
        <Route path= '/FAQ'  element={<FaQuestions/>}/>
        {/* <Route path='/' element={</>}/> */}
      </Routes>
    </Router>

    </>
    

  );
}

export default App;
