import React from "react";
import Map from '../Map/maps';
import './ride-connected.css'

export default function rideConnected() {

    const minutes = '15';

    return(
        <>
            <div id="connected-container">
                <div id="map">
                    <Map/>
                </div>

                <div id="wait-container">
                    <h1 id="wait-h1">
                        Ride connected!
                    </h1>
                    <p id="wait-p">
                        your driver will be here in ~{minutes} minutes.
                    </p>
                </div>
            </div>
        </>
    )
}