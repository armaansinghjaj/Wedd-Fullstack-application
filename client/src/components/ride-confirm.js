import React from 'react';
import Map from '../components/map';
import './Ride-confirm.css'

export default function RideConfirm() {

    
    return(
        <>
            <div id='confirm-container'>   
                <div id="map_div" >
                    {/* <%- include("map") -%> <br> */}
                    <Map></Map>
                    <div id="estimate">
                        <button id="getquote">Get Quote</button>
                    </div>
                    <div id="buttons">
                        <button id="get_map">Confirm</button>
                        <form id='ride-reset-form' action="ride">
                            <input type="submit" value="Reset"/>
                        </form>

                </div>	
                </div>
                <div id="info_div">
                    <p id='check-details'>Check Details</p><br/>
                    {/* <%= details %> */}
                </div>
                <input type="hidden" value="<%= startlat %>" name="startlat" id="startlat" />
                <input type="hidden" value="<%= startlng %>" name="startlng" id="startlng" />
                <input type="hidden" value="<%= destlat %>" name="destlat" id="destlat" />
                <input type="hidden" value="<%= destlng %>" name="destlng" id="destlng" />
                <input type="hidden" value="2" id="map_state" />
            </div>
        </>
    )
}