import React from 'react';
import '../App.css';
import DriverNavbar from '../components/Driver-components/Driver-Sidebar';
import StartShift from '../components/Driver-components/startshift';

export default function Driver() {
  return (
    <>
      <DriverNavbar/>
      <StartShift/>
    </>
  )
}