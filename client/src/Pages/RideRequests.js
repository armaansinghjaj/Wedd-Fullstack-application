import React from "react";
import AdminRideRequests from '../components/Ride-requests';
import AdminNavbar from "../components/AdminNavbar";

export default function RideRequests() {
    return(
        <>
        
        <div className="RideRequests-container">
            <AdminNavbar/>
            <AdminRideRequests/>
        </div>

        </>
    )
}