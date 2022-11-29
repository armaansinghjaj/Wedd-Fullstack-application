
import * as React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Client portals
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Forgetpass from './Pages/Forgetpass';

//Driver Page
import DriverProfile from './Pages/DriverProfile';
import Driver from './Pages/Driver';
import DriverDashboard from './Pages/DriverDashboard';
import DriverRequests from './Pages/Driver-Available-Requests';

// Ride Pages
import Ride from './Pages/Ride';
import RideConfirm from './Pages/RideConfirmation';
import RideSearching from './Pages/RideSearching';
import RideConnected from './Pages/RideConnected';
import RideCompleted from './Pages/RideCompleted';

// Admin pages
import Admin from './Pages/Admin';
import AdminEdit from './Pages/AdminEdit';
import AdminNews from './Pages/AdminNews';
import AdminRoles from './Pages/AdminRoles';
import DriversEdit from './Pages/DriversEdit';
import ContactRequests from './Pages/ContactRequests';
import AdminRideRequests from './Pages/RideRequests';

// Background edit pages
import BgHome from './components/Admin-components/Edit-Background-Home';
import BgAbout from './components/Admin-components/Edit-Background-About';
import BgContact from './components/Admin-components/Edit-Background-About'

// Customer account pages
import CustomerProfile from './Pages/Account';
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
        <Route path= '/about'  element={<About/>}/> 
        <Route path= '/services'  element={<Services/>}/> 
        <Route path= '/login'  element={<Login/>}/> 
        <Route path= '/signup'  element={<Signup/>}/>
        <Route path= '/forget'  element={<Forgetpass/>}/>
        
        {/* Ride Pages is pending yet */}
        <Route path= '/ride'  element={<Ride/>}/> 
        <Route path= '/ride/confirm'  element={<RideConfirm/>}/> 
        <Route path= '/ride/searching'  element={<RideSearching/>}/> 
        <Route path= '/ride/connected'  element={<RideConnected/>}/> 
        <Route path= '/ride/completed'  element={<RideCompleted/>}/> 

        {/* Admin Pages */}
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
        <Route path= '/account'  element={<CustomerProfile/>}/>        
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
