
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
import DriverProfile from './Pages/DriverProfile';
import Driver from './Pages/Driver';
import DriverDashboard from './Pages/DriverDashboard';
import DriverRequests from './Pages/DriverAvailRequests';

// Admin pages
import Profile from './Pages/Profile';
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
        <Route path= '/ride'  element={<Ride/>}/> 
        <Route path= '/about'  element={<About/>}/> 
        <Route path= '/services'  element={<Contact/>}/> 
        <Route path= '/login'  element={<Login/>}/> 
        <Route path= '/signup'  element={<Signup/>}/>
        
        {/* News Page is pending yet */}

        {/* Admin Pages */}
        <Route path= '/Employeeprofile'  element={<Profile/>}/> 
        <Route path= '/admin'  element={<Admin/>}/> 
        <Route path= '/admin/adminlist'  element={<AdminEdit/>}/> 
        <Route path= '/admin/news'  element={<AdminNews/>}/> 
        <Route path= '/admin/roles'  element={<AdminRoles/>}/> 
        <Route path= '/admin/driverlist'  element={<DriversEdit/>}/> 
        <Route path= '/admin/services' element={<ContactRequests/>}/>
        <Route path= '/admin/rides' element={<AdminRideRequests/>}/>

        {/* Background editing pages */}
        <Route path='/backgroundedithome' element={<BgHome/>}/>
        <Route path='/backgroundeditabout' element={<BgAbout/>}/>
        <Route path='/backgroundeditcontact' element={<BgContact/>}/>

        {/* Driver dashboard pages */}
        <Route path= '/Driver-Profile'  element={<DriverProfile/>}/> 
        <Route path= '/driver'  element={<Driver/>}/> 
        <Route path= '/driverdashboard'  element={<DriverDashboard/>}/>
        <Route path= '/driveravailrequests'  element={<DriverRequests/>}/> 


        {/* Customer account pages */}
        <Route path= '/profile'  element={<Account/>}/>        
        <Route path= '/triphistory'  element={<TripHistory/>}/>
        <Route path= '/helpandsupport'  element={<HelpAndSupport/>}/>
        <Route path= '/faq'  element={<FaQuestions/>}/>
        {/* <Route path='/' element={</>}/> */}
      </Routes>
    </Router>

    </>
    

  );
}

export default App;
