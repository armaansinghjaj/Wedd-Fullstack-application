import React from "react";

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
        {/* <%- include("map") -%> 
        <!-- quotation --> */}
        <div class="quotation_block" id="quotation">
        </div>
        {/* <!-- confirm button -->
    <% } else {%> */}
        <p>Please wait while we're searching drivers for you...</p>
    {/* <% } %> */}
        </div>
        
        </>
    )
}