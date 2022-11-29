import React from "react";
import DriverNavbar from "../components/Driver-components/Driver-Sidebar";
import Dashboard from '../components/Driver-components/Driver-requests';


export default function DriverAvailRequests() {

    return(
        <div id='driver-home-background'>
        <DriverNavbar/>
        <Dashboard/>
        </div>
    )
}