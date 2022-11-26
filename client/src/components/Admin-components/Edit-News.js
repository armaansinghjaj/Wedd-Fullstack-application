import React from 'react';
import './AdminPages.css';

export default function AdminNews() {

    
    return(
        <>
        <div className='AdminNews-container'>
        <h1 id='admin-h1'>Add News</h1>
        <form action="/addnews" method="POST">
            <table>
                <tr>
                    <td>Start-date</td>
                    <td><input type="datetime-local" name="start_date" /></td>
                </tr>
                <tr>
                    <td>End-date</td>
                    <td><input type="datetime-local" name="end_date" /></td>
                </tr>
                <tr>
                    <td>Headline</td>
                    <td><input type="text" name="headline" /></td>
                </tr>
                <tr>
                    <td>Message</td>
                    <td><input type="text" name="message" /></td>
                </tr>
                <tr>
                    <td>Color</td>
                    <td><input type="color" name="color" /></td>
                </tr>
            </table>
            <input type="submit"  className='editnews' value="Add"/>
            <input type="hidden" name="action" value="add"/>
        </form>
    </div>
        </>
    )
}