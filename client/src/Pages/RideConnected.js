import React from "react";
import Connected from '../components/Customer-components/Ridepage-components/Ride-process/ride-connected'
import RideNavbar from  '../components/Customer-components/Ridepage-components/Ride-navbar'

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