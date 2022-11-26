import React from "react";
import Loader from '../components/load-animation'
import Map from '../components/map'
import './ride-connecting.css'


export default function rideConnecting() {


    return(
        <>
        
        <div id="connect-container">
            {/* <% if (driver_available === true) { %> */}
        <input type="hidden" value="<%= startlat %>" name="startlat" id="startlat"/>
        <input type="hidden" value="<%= startlng %>" name="startlng" id="startlng"/>
        <input type="hidden" value="<%= destlat %>" name="destlat" id="destlat"/>
        <input type="hidden" value="<%= destlng %>" name="destlng" id="destlng"/>
        <input type="hidden" value="3" id="map_state"/>
        <Map/>
        {/* <%- include("map") -%> 
        <!-- quotation --> */}

        <div class="quotation_block" id="quotation">
        </div>
        {/* <!-- confirm button -->
    <% } else {%> */}
        <div id="loading-screen">
            <p id="please-wait">Please wait while we are connecting you to your drivers...</p>
            <p id="mobile-please-wait">Searching for drivers...</p>
            <br/>
            <p id="appreciate">Thank you for your patience!</p>
            <div id="load-symbol">
                <Loader/>
            </div>
        </div>
    {/* <% } %> */}
        </div>
        
        </>
    )
}