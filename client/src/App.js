
import * as React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';

// Client portals
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Forgotpass from './Pages/Forgotpass'; 

// Ride Pages
import Ride from './Pages/Ride';

// Admin pages
import Admin from './Pages/Admin';
import AdminEdit from './Pages/AdminEdit';
import AdminNews from './Pages/AdminNews';
import DriversEdit from './Pages/DriversEdit';
import ContactRequests from './Pages/ContactRequests';
import AdminRideRequests from './Pages/RideRequests';

// Customer account pages
import CustomerProfile from './Pages/Account';
import TripHistory from './Pages/TripHistory';
import HelpAndSupport from './Pages/HelpAndSupport';
import FaQuestions from './Pages/FAQ';

// Common pages
import Logout from './components/Common-components/Logout'
import ResetPassword from './components/Common-components/ResetPassword';
// import EmailConfirmation from './Pages/EmailConfirmation';

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
        <Route path= '/forgot'  element={<Forgotpass/>}/>
        <Route path= '/forgot/reset/:token'  element={<ResetPassword/>}/>
        
        
        {/* Ride Pages is pending yet */}
        <Route path= '/ride'  element={<Ride/>}/> 

        {/* Admin Pages */}
        <Route path= '/admin'  element={<Admin/>}/> 
        <Route path= '/admin/adminlist'  element={<AdminEdit/>}/> 
        <Route path= '/admin/news'  element={<AdminNews/>}/>
        <Route path= '/admin/driverlist'  element={<DriversEdit/>}/> 
        <Route path= '/admin/services' element={<ContactRequests/>}/>
        {/* <Route path= '/admin/rides' element={<AdminRideRequests/>}/> */}

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

export default App;
