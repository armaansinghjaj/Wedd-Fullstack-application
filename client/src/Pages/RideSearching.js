import React from "react";
import Search from '../components/ride-connecting'
import RideNavbar from '../components/Ride-navbar'

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