import React from "react";
import Complete from '../components/ride-completed'
import RideNavbar from '../components/Ride-navbar'

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