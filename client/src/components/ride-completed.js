import React from "react";
import {Link} from 'react-router-dom'
import './ride-complete.css'

export default function RideComplete() {



    return(
        <>
        
        <div id="ride-complete-container">
            <div id="complete-text">
                <h1 id="complete-h1">Ride Complete!</h1>
                <p id="complete-p">Thank you for riding with us.</p>
                <br/>
                <Link id="complete-link" to={'/Home'}><button>Exit</button></Link>
            </div>

        </div>
        
        </>
    )
}