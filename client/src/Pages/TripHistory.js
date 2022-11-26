import React from "react";
import History from '../components/Trip-history';
import AccountNav from '../components/Customer-components/Profilepage-components/Account-Navbar';

export default function TripHistory() {
    return(
        <>
        <div className="TripHistory-container">
            <AccountNav/>
            <History/>
        </div>

        </>
    )
}