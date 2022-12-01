
import * as React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';

// Client portals
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Forgetpass from './Pages/Forgetpass';

// Ride Pages
import Ride from './Pages/Ride';
import RideConfirm from './Pages/RideConfirmation';
import RideSearching from './Pages/RideSearching';
import RideConnected from './Pages/RideConnected';
import RideCompleted from './Pages/RideCompleted';

// Customer account pages
import CustomerProfile from './Pages/Account';
import TripHistory from './Pages/TripHistory';
import HelpAndSupport from './Pages/HelpAndSupport';
import FaQuestions from './Pages/FAQ';

// Common pages
import Logout from './components/Common-components/Logout'

const Customer = () => {
  
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

        {/* Customer account pages */}
        <Route path= '/account'  element={<CustomerProfile/>}/>        
        <Route path= '/triphistory'  element={<TripHistory/>}/>
        <Route path= '/helpandsupport'  element={<HelpAndSupport/>}/>
        <Route path= '/faq'  element={<FaQuestions/>}/>
        {/* <Route path='/' element={</>}/> */}

        {/* Common pages */}
        <Route path='/logout' element={<Logout/>}/>

        {/* Redirect pages */}
        <Route path='/customer' element={
          <Navigate replace to="/"/>
        }/>
      </Routes>
    </Router>

    </>
    

  );
}

export default Customer;