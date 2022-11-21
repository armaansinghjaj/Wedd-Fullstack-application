import React from "react";
import { useNavigate } from "react-router-dom";
import './Driverportal.css';


export default function Dashboard() {

    const rideRequestID = 'Ride request ID';
    const rideName = 'Name';
    const rideEmail ='Email';
    const ridePhone = 'Phone';
    const ridePickup = 'Pickup Address';
    const rideDropoff = 'Dropoff Address';

    const move = useNavigate();
    const accept = useNavigate();

    const toDash = () => {
        accept('/DriverDashboard')
    }
    const toShift = () => {
        move("/Driver")
    }



    return(
        <>
        <div>
        <div id="DriverRequests-container">
        {/* <% if (rides.length > 0) { %> */}
        <table className='Drivertable'>
            <tr>
                <th>Request ID</th>
                <th>Name</th>
                <th>E-mail</th>
                <th>Phone</th>
                <th>Pick-up Address</th>
                <th>Destination</th>
                <th>Accept</th>
                <th>Decline</th>
            </tr>
            {/* <% rides.forEach(ride => { %> */}
                <tr>
                    <td>{rideRequestID}</td>
                    <td>{rideName}</td>
                    <td>{rideEmail}</td>
                    <td>{ridePhone}</td>
                    <td>{ridePickup}</td>
                    <td>{rideDropoff}</td>
                    <td>
                        <form action='/DriverDashboard'>
                            <input type='submit' value='Accept' name='accept'/>
                            <input type='hidden' name='selected' value={rideRequestID}/>
                            <input type='hidden' name='action' value='accept'/>
                        </form>
                    </td>
                    <td>
                        <form action='/DriverAvailRequests' >
                            <input type='submit' value='Decline' name='decline'/>
                            <input type='hidden' name='selected' value={rideRequestID}/>
                            <input type='hidden' name='action' value='Decline'/>
                        </form>
                    </td>
                </tr>
            {/* <% }) %> */}
        </table>
    {/* <% } else { %> */}
        <p>No requests to show</p>
        <p>Searching for requests...</p>
    {/* // <% } %> */}

        <button className="end_shift"  id="submit" onClick={toShift}>End shift</button> <br/>
        
        {/* This form prevents rendering. Dont know why */}

            {/* <div class="end_form_container" style="display: none;">
                <p>Are you sure you want to end your shift?</p>
                <form action="/Driver" method="POST">
                    <input type="submit" value="Confirm"/>
                </form>
            </div> */}
        </div>    
        </div>
        </>
    )
}