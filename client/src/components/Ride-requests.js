import React, {useState} from "react";

import './AdminPages.css';

export default function RequestTable() {

    const ride_request_id='1234567';
    const ride_name='Name';
    const ride_email='email@email.com';
    const ride_phone='4031234567';
    const ride_pickup_address='pickup address';
    const ride_destination='destination';

    const [visibleEdit, setVisibleEdit] = useState(false) 

    const overlayEdit= visibleEdit ? "overlay-visibleEdit" : "overlay-hiddenEdit";

    const openOverlayEdit = () => {setVisibleEdit(!visibleEdit);}
    const closeOverlayEdit = () => {setVisibleEdit(!visibleEdit);}

    return(
        <> 
         {/*edit ride requests form*/}
        <div className={overlayEdit}>
            <div className={visibleEdit === true ? 'edit-role' : 'edit-role-hidden'}>
                <div id='edit-closeOverlay-btn-driver' >
                    <button onClick={closeOverlayEdit}><i class="fa-solid fa-x"></i></button>
                </div>
                <form>
                    <table>
                        <tr>
                            <td>Request ID</td>
                            <td><input type={'text'} name = 'request_edit_request_id' value={ride_request_id}/></td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td><input type={'text'} name = 'request_edit_name' value={ride_name}/></td>
                        </tr>
                        <tr>
                            <td>E-Mail</td>
                            <td><input type={'email'} name = 'request_edit_email' value={ride_email}/></td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td><input type={'tel'} name = 'request_edit_phone' value={ride_phone}/></td>
                        </tr>
                        <tr>
                            <td>Pick-up location</td>
                            <td><input type={'text'} name = 'request_edit_pickup' value={ride_pickup_address}/></td>
                        </tr>
                        <tr>
                            <td>Destination</td>
                            <td><input type={'text'} name = 'request_edit_destination' value={ride_destination}/></td>
                        </tr>
                    </table>
                        <input type="submit" className='editi' value="Edit"/>
                        <input type="hidden" name="action" value="update"/>
                </form>
            </div>
        </div>


<div className="ride-request-container">
        <div className="requesttable-container">
            <h2>Ride Requests</h2>
            <table className='Drivertablei'>
                <tr>
                    <th>Request ID</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Phone</th>
                    <th>Pick-up Address</th>
                    <th>Destination</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            {/* <% rides.forEach(ride => { %> */}
                <tr>
                    <td>{ride_request_id}</td>
                    <td>{ride_name}</td>
                    <td>{ride_email}</td>
                    <td>{ride_phone}</td>
                    <td>{ride_pickup_address}</td>
                    <td>{ride_destination}</td>
                    <td>
                            
                        <button onClick={openOverlayEdit}><i className="fa-solid fa-pencil"></i></button>
                    {/* <input type='submit' value='edit' name='edit'/>*/}
                            <input type='hidden' name='selected' value={ride_request_id}/>
                            <input type='hidden' name='action' value='edit'/>
                    </td>
                    <td>
                        <form action='/rides' method='post'>

                        <button><i class="fa-solid fa-x"></i></button>
                        {/* <input type='submit' value='delete' name='delete'/>*/}
                            <input type='hidden' name='selected' value={ride_request_id}/>
                            <input type='hidden' name='action'value='delete'/>
                        </form>
                    </td>
                </tr>
            {/* <% }) %> */}
            </table>
        </div>
        </div>
        </>
        
    )
}