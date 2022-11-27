import React from "react";
import {useNavigate} from 'react-router-dom';
import './Driverportal.css';

export default function DriverHome() {

    const move = useNavigate();

    const toRequests = () => {
        move("/DriverAvailRequests");
    }

    return(
        <>
         
       <div className="Startshift">
       <h2 id='driver1'>Driver's Portal</h2>
        <div className="driverinfo">
            <form id="dtable">
               
                   
                    <input type="number" name="d1id" placeholder="Driver1 ID" id='driver-1'/>
                    <br />
                    <input type="number" name="d2id" placeholder="Driver2 ID" id='driver-2'/>
                    <br/>
                    <input type="number" name="carid" placeholder="Car-id" id='carid'/>
                    <input type="submit" name="login_submit" id='login-submit-driver' value='confirm' onClick={toRequests}/>
                
            </form>
            </div>
            </div>
            
        </>
    )
}