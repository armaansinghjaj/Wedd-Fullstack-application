import React from 'react';
import Map from '../components/map';

export default function RideConfirm() {

    
    return(
        <>
        routing success
        
        <div id="map_div" >
            {/* <%- include("map") -%> <br> */}
            <Map></Map>
            <div id="estimate">
                <button id="getquote">Get Quote</button>
            </div>
        </div>
        <div id="info_div">
            Please check these details<br/>
            {/* <%= details %> */}
        </div>

        <input type="hidden" value="<%= startlat %>" name="startlat" id="startlat" />
        <input type="hidden" value="<%= startlng %>" name="startlng" id="startlng" />
        <input type="hidden" value="<%= destlat %>" name="destlat" id="destlat" />
        <input type="hidden" value="<%= destlng %>" name="destlng" id="destlng" />
        <input type="hidden" value="2" id="map_state" />

        <div id="buttons">
            <button id="get_map">Confirm</button><br/>
            <form action="ride">
                <input type="submit" value="Reset"/>
            </form>
        </div>	
        
        </>
    )
}