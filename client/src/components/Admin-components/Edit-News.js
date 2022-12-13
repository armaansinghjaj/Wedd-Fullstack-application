import React from 'react';
import './Edit-News.css';
import Updates from "../Customer-components/Homepage-components/CardNews";

export default function AdminNews() {

    
    return(
        <>  
            <div className='AdminNews-container'>
                <div id='admin-edit-table'>
                    <form id='edit-news-form' action="/addnews" method="POST">
                        <h1 id='admin-news-h1'>Add News</h1>
                        <table id="mytable1">
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
                                <td><input type="text" id="t1" name="headline" /></td>
                            </tr>
                            <tr>
                                <td>Message</td>
                                <td><input type="text" id="t1"  name="message" /></td>
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
            </div>
        </>
    )
}