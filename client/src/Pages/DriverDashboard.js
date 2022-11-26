import React from "react";
import DriverNavbar from "../components/Driver-components/Driver-Sidebar";
import Requests from '../components/Driver-components/Driver-dashboard';

export default function DriverDashboard() {
    return(
        <>
        <DriverNavbar/>
        <Requests/>
        </>
    )
}