import React from "react";
import AdminRideRequests from '../components/Admin-components/Ride-requests';
import AdminNavbar from "../components/Admin-components/Admin-bar";

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