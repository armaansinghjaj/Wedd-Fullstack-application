import React, { useEffect, useState } from "react";
import Loader from '../../../Common-components/Load-animation'
import Map from '../Map/maps'
import './ride-connecting.css'


export default function RideConnecting() {
    const [data, setData] = useState({name: "", email: "", phone: "", pickup: "", destination: "", payment:""});

    useEffect(() => {
		fetch("/api/ride/processing")
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			})
			.catch((err) => {
				console.log(err);
			})
	}, []);


    return(
        <>
        
        <div id="connect-container">
        <input type="hidden" value="3" id="map_state"/>

        <div className="quotation_block" id="quotation">
        </div>
        <div id="loading-screen">
            <p id="please-wait">Please wait while we are connecting you to your drivers...</p>
            <p id="mobile-please-wait">Searching for drivers...</p>
            <br/>
            <p id="appreciate">Thank you for your patience!</p>
            <div id="load-symbol">
                <Loader/>
            </div>
        </div>
        </div>
        
        </>
    )
}