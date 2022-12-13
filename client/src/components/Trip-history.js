import React from "react";
import './Trip-history.css'

export default function History() {

    const time='time';
    const date='date';
    const duration='duration';
    const driver=['Driver one', ',', ' Driver two'];

    return(
        <>
        
        <div className="trip-container">
            <div id="trip-history-wrapper">
            <h2 id="trip-history-h2">Trip History</h2>
                <table className="trip-table">
                    <tr>
                        <th>Time</th>
                        <th>Date</th>
                        <th>Duration</th>
                        <th>Drivers</th>
                        <th>Details</th>
                    </tr>
                    <tr>
                        <td>{time}</td>
                        <td>{date}</td>
                        <td>{duration}</td>
                        <td>{driver}</td>
                        <td><button id= "trip_btn">Details</button></td>
                    </tr>
                </table>
            </div>

        </div>

        </>
    )
}