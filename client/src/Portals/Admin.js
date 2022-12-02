import * as React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';

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
import BgContact from './components/Admin-components/Edit-Background-Contact'

// Common pages
import Logout from './components/Common-components/Logout'

const Admin = () => {
  
  return (
    <>
    <Router>
        <Routes>
            <Route path= '/login'  element={<Login/>}/> 
            <Route path= '/signup'  element={<Signup/>}/>
            <Route path= '/forget'  element={<Forgetpass/>}/>

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
            <Route path= '/driver/Profile'  element={<DriverProfile/>}/> 
            <Route path= '/driver'  element={<Driver/>}/> 
            <Route path= '/driver/dashboard'  element={<DriverDashboard/>}/>
            <Route path= '/driver/availrequests'  element={<DriverRequests/>}/> 

            {/* Common pages */}
            <Route path='/logout' element={<Logout/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default Admin;