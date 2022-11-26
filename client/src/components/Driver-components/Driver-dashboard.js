import React from "react";
import './Driverportal.css';

export default function Requests() {

    const driverName = 'Driver Name';
    const pickupAddress = 'Pickup Address';
    const dropoffAddress = 'Dropoff Address';

    return(
        <>
         <h2>Welcome {driverName}</h2>
        <div>
        <div id="Driverdash-container">
           
            <h2>Your ride</h2>
            <table>
                <tr>
                    <th>FROM</th>
                    <th>TO</th>
                </tr>
                <tr>
                    <td>{pickupAddress}</td>
                    <td>{dropoffAddress}</td>
                </tr>
            </table>
        <div class="starter">
            <p>Slide to drive</p>
            <p><input type="range" value="0" class="pullee"/></p>
        </div>
        <div class="map">
            <span id="map_section">MAP HERE</span>
            <div id="buttons">
                <form action="/DriverAvailRequests" >
                    <input type="submit" id="submitc" value="Complete Ride"/>
                </form>
                <form action="/DriverAvailRequests">
                    <input type="submit"  id="submiti" value="Cancel Ride"/>
                </form>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}