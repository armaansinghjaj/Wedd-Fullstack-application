import React, {useState} from "react";
import './Driver-requests.css';
import Nametag from "../Common-components/Nametag";


export default function Dashboard() {

    const rideRequestID = 'Ride request ID';
    const rideName = 'Name';
    const rideEmail ='Email';
    const ridePhone = 'Phone';
    const ridePickup = 'Pickup Address';
    const rideDropoff = 'Dropoff Address';


    const [endShift, setEndShift] = useState(false);

    const displayButton = () => {
        setEndShift(!endShift)
    }


    return(
        <>
        <Nametag id1="employee-name-tag" id2="wedd-logo-display" id3="employee-name-display" text={"Driver Name"} employee={"Driver"}/>
        <div id="DriverRequests-container">
            <div id="Driver-requests-table">
            {/* <% if (rides.length > 0) { %> */}
            <table className='requests-drivertable'>
                <tr id="requests-tr-header">
                    <th id="requests-th">ID</th>
                    <th id="requests-th">Name</th>
                    <th id="requests-th">E-mail</th>
                    <th id="requests-th">Phone</th>
                    <th id="requests-th">Pick-up</th>
                    <th id="requests-th">Destination</th>
                    <th id="requests-th">Accept</th>
                    <th id="requests-th">Decline</th>
                </tr>
                {/* <% rides.forEach(ride => { %> */}
                    <tr id="requests-tr-data">
                        <td>{rideRequestID}</td>
                        <td>{rideName}</td>
                        <td>{rideEmail}</td>
                        <td>{ridePhone}</td>
                        <td>{ridePickup}</td>
                        <td>{rideDropoff}</td>
                        <td>
                            <form action='/driver/dashboard'>
                                <input id="requests-accept-btn" type='submit' value='Accept' name='accept'/>
                                <input type='hidden' name='selected' value={rideRequestID}/>
                                <input type='hidden' name='action' value='accept'/>
                            </form>
                        </td>
                        <td>
                            <form action='/driver/availrequests' >
                                <input id="requests-decline-btn" type='submit' value='Decline' name='decline'/>
                                <input type='hidden' name='selected' value={rideRequestID}/>
                                <input type='hidden' name='action' value='Decline'/>
                            </form>
                        </td>
                    </tr>
                {/* <% }) %> */}
            </table>

            </div>    
        </div>
        {/* <% } else { %> */}
        <div id="requests-feedback">
            <p id="driver-null-p">No requests</p>
            <p id="driver-searching-p">Searching...</p>
        </div>
        {/* // <% } %> */}
        <div id={endShift ? "ride-requests-overlay-active" : "ride-requests-overlay"}>
            <div class={"end_form_container"}>
                    <p id="confirm-p">Are you sure you want to end your shift?</p>
                    <form id="end-shift-form" action="/Driver">
                        <input id="requests-submit" type={"submit"} value="Confirm"/>
                        <input id="end-shift-btn" value="Cancel" onClick={displayButton}/>
                    </form>
            </div>
        </div>

        <div>
            <button className="end_shift" onClick={displayButton}>End shift</button>
        </div>

        </>
    )
}