import React from "react";
import {useNavigate} from 'react-router-dom';
import Nametag from "../Common-components/Nametag";
import './Driverportal.css';

export default function DriverHome() {

    const move = useNavigate();

    const toRequests = () => {
        move("/driver/availrequests");
    }
    
    return(
        <>
            <Nametag id1="employee-name-tag" id2="wedd-logo-display" id3="employee-name-display" text={"Driver Name"} employee={"Driver"} welcome={"Welcome"}/>
            <div id='start-shift-container'>
                <h2 id='driver2'>Please enter driver ID</h2>
                <form id="dtable">
                        <input type="number" name="d1id" placeholder="Driver1 ID" id='driver-1'/>
                        <br />
                        <input type="number" name="d2id" placeholder="Driver2 ID" id='driver-2'/>
                        <br/>
                        <input type="number" name="carid" placeholder="Car-id" id='carid'/>
                        <input type="submit" name="login_submit" id='start-shift-submit' value='confirm' onClick={toRequests}/>
                </form>
            </div>
        </>
    )
}