import React from "react";
import Connected from '../components/ride-connected'
import RideNavbar from  '../components/Ride-navbar'

export default function rideConnected() {
    return(

        <>
            <div className='rideConnected-container'>
                <RideNavbar/>
                <Connected/>
            </div>
        </>
    ) 
}