import React from "react";
import Complete from '../components/Customer-components/Ridepage-components/Ride-process/ride-completed'
import RideNavbar from '../components/Customer-components/Ridepage-components/Ride-navbar'

export default function rideComplete() {
    return(

        <>
            <div className='rideComplete-container'>
                <RideNavbar/>
                <Complete/>
            </div>
        </>
    ) 
}