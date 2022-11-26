import React from "react";
import Confirm from '../components/ride-confirm'
import RideNavbar from '../components/Ride-navbar'

export default function rideConfirmation() {
    return(

        <>
            <div className='rideConfirmation-container'>
                <RideNavbar/>
                <Confirm/>
            </div>
        </>
    ) 
}