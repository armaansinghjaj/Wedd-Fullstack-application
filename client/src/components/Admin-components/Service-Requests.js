import React from "react";
import './Service-Requests.css'

export default function ContactRequestsTable() {

    const request_request_id='request ID';
    const request_name = 'name';
    const request_address = 'address';
    const request_phone = 'phone';
    const request_service_id = 'service_id';
    const request_email = 'email';
    const request_comments = 'comments';
    const request_updates = 'updates';

    return(
        <>  
            <div className="contactRequest-container">
                <div id="services-request-container">
                    <h1 id="contact-request-h1">Contact Requests</h1>
                    <table className='contact-request-table'>
                        <tr>
                            <th>Request ID</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Service</th>
                            <th>E-mail</th>
                            <th>Comments</th>
                            <th>Updates</th>
                            <th>Delete</th>
                        </tr>
                        <tr>
                            <td>{request_request_id}</td>
                            <td>{request_name}</td>
                            <td>{request_address}</td>
                            <td>{request_phone}</td>
                            <td>{request_service_id}</td>
                            <td>{request_email}</td>
                            <td>{request_comments}</td>
                            <td>{request_updates}</td>
                            <td>
                                <form action='/requests' method='post'>
                                <button><i class="fa-solid fa-x"></i></button>
                                {/* <input type='submit' value='delete' name='delete'/>*/}
                                    <input type='hidden' name='selected' value={request_request_id}/>
                                    <input type='hidden' name='action' value='delete'/>
                                </form>
                            </td>
                        </tr>
                    </table>
                </div>           
            </div>
        </>
    )
}