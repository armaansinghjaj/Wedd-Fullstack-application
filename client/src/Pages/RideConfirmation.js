import React from "react";
import Confirm from '../components/Customer-components/Ridepage-components/Ride-process/ride-confirm'
import RideNavbar from '../components/Customer-components/Ridepage-components/Ride-navbar'

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