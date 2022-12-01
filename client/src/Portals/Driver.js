
import * as React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';

//Driver Page
import DriverProfile from './Pages/DriverProfile';
import Driver from './Pages/Driver';
import DriverDashboard from './Pages/DriverDashboard';
import DriverRequests from './Pages/Driver-Available-Requests';

// Common pages
import Logout from './components/Common-components/Logout'

const Driver = () => {
  
  return (
    <>
      <Router>
       {/* Routing for application */}
      <Routes>
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

export default Driver;