import React from "react";

export default function History() {

    const time='time';
    const date='date';
    const duration='duration';
    const driver=['Driver one', ',', ' Driver two'];

    return(
        <>
        
        <div className="trip-container">
            <h2>Trip History</h2>
            <div >
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
                        <td><button>Details</button></td>
                    </tr>
                </table>
            </div>

        </div>

        </>
    )
}