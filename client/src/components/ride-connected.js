import React from "react";
// import Map from '../components/map';

export default function rideConnected() {

    const minutes = '15';

    return(
        <>
        
        <div id="connected-container">
            <h1>
                Ride connected!
            </h1>
            <p>
                your driver will be here in ~{minutes}
            </p>
            <div id="map"></div>
        </div>

        </>
    )
}