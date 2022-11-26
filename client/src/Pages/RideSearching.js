import React from "react";
import Search from '../components/Customer-components/Ridepage-components/Ride-process/ride-connecting'
import RideNavbar from '../components/Customer-components/Ridepage-components/Ride-navbar'

export default function rideSearching() {
    return(

        <>
            <div className='rideSearching-container'>
                <RideNavbar/>
                <Search/>
            </div>
        </>
    ) 
}