import * as React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import News from './Pages/News';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Ride from './Pages/Ride';
import Admin from './Pages/Admin';
import Driver from './Pages/Admin';


const App = () => {
  
  return (
    <Router>
       <NavBar />
      <Routes>
        <Route path= "*" element={<Home />}/>
        <Route path= '/Ride'  element={<Ride/>}/> 
        <Route path= '/About'  element={<About/>}/> 
        <Route path= '/Contact'  element={<Contact/>}/> 
        <Route path= '/News'  element={<News/>}/> 
        <Route path= '/Login'  element={<Login/>}/> 
        <Route path= '/Signup'  element={<Signup/>}/>
        <Route path= '/Admin'  element={<Admin/>}/> 
        <Route path= '/Driver'  element={<Driver/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
