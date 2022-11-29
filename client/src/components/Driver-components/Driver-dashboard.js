import React, {useState} from "react";
import './Driver-dashboard.css';

export default function Requests() {

    const pickupAddress = 'Pickup Address';
    const dropoffAddress = 'Dropoff Address';

    const [visibleMap, setVisibleMap] = useState(false);

    const displayMap = () =>{
        setVisibleMap(!visibleMap)
    }

    return(
        <>

            <div id="Driverdash-container">
                <div id="dashboard-wrapper">
                    <h2 id="dashboard-h2">Your ride</h2>
                    
                    <table id="dashboard-table">
                        <tr>
                            <th id="dashboard-table-th">FROM</th>
                            <th id="dashboard-table-th">TO</th>
                        </tr>
                        <tr>
                            <td id="dashboard-table-td">{pickupAddress}</td>
                            <td id="dashboard-table-td">{dropoffAddress}</td>
                        </tr>
                    </table>
                    <div className="starter">
                        {/* <p>Slide to drive</p>
                        <p><input type="range" value="0" className="pullee"/></p> */}
                        <div id="buttons">
                            <p><button id="dashboard-show-map" onClick={displayMap}>Show map</button></p>
                            <form action="/DriverAvailRequests" >
                                <input type="submit" id="dashboard-complete-ride" value="Complete Ride"/>
                            </form>
                            <form action="/DriverAvailRequests">
                                <input type="submit"  id="dashboard-cancel-ride" value="Cancel Ride"/>
                            </form>
                        </div>
                    </div>
                    <div className={"map"}>
                        {/* <span id="map_section">MAP HERE</span> */}
                        <div id={visibleMap ? "map_placeholder" : "map_hidden"}>MAP HERE</div>
                    </div>
                </div>
            </div>
        </>
    )
}