import React, {useState} from 'react';
import './AdminPages.css';

export default function AdminDriversEdit() {

    const employee_id='1234567';
    const name='employee name';
    const email='email@email.com';
    const edit_employee_id='1234567';
    const edit_email='email@email.com';
    const edit_name='name';

    const [visibleEdit, setVisibleEdit] = useState(false) 
    const [visibleAdd, setVisibleAdd] = useState(false) 

    const overlayEdit= visibleEdit ? "overlay-visibleEdit" : "overlay-hiddenEdit";
    const overlayAdd= visibleAdd ? "overlay-visibleAdd" : "overlay-hiddenAdd";

    const openOverlayEdit = () => {setVisibleEdit(!visibleEdit);}
    const closeOverlayEdit = () => {setVisibleEdit(!visibleEdit);}

    const openOverlayAdd = () => {setVisibleAdd(!visibleAdd);}
    const closeOverlayAdd = () => {setVisibleAdd(!visibleAdd);}

    return(
        <>
        {/* Edit Driver Form */}
        <div className={overlayEdit}>
                <div className={visibleEdit === true ? 'edit-role' : 'edit-role-hidden'}>
                    <div id='edit-closeOverlay-btn-driver' >
                        <button onClick={closeOverlayEdit}><i class="fa-solid fa-x"></i></button>
                    </div>
                <h2>Edit driver</h2>
                <div>
                    <form action="/drivers" method="post">
                        <table>
                            <tr>
                                <td>Employee ID</td>
                                <td><input type="number" name="edit_employee_id" readonly value={edit_employee_id}/></td>
                            </tr>
                            <tr>
                                <td>E-mail</td>
                                <td><input type="email" name="edit_email" value={edit_email}/></td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td><input type="text" name="edit_name" value={edit_name}/></td>
                            </tr>
                            
                        </table>
                        <input type="submit" className='editi' value="Edit"/>
                        <input type="hidden" name="action" value="update"/>
                    </form>
                </div>
            </div>
        </div>

        {/* Add Driver Form */}
        <div className={overlayAdd}>
        <div className={visibleAdd === true ? 'edit-role' : 'edit-role-hidden'}>
                    <div id='add-closeOverlay-btn-driver'>
                        <button onClick={closeOverlayAdd}><i class="fa-solid fa-x"></i></button>
                    </div>
                <h2>Add driver</h2>
                <div>
                    <form action="/drivers" method="post">
                        <table>
                            <tr>
                                <td>E-mail</td>
                                <td><input type="email" name="new_email" /></td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td><input type="password" name="new_password" /></td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td><input type="text" name="new_name" /></td>
                            </tr>
                            
                        </table>

                        <input type="submit" className='deletei' value="Add"/>
                        <input type="hidden" name="action" value="add"/>
                    </form>
                </div>
            </div>
        </div>
        {/* Add button */}
        <div id='addButton'>
                <button id='Add-button' onClick={openOverlayAdd}><i className="fa-regular fa-square-plus fa-2x"/>
                </button>
        </div>
        {/*Display Drivers List */}
        <div className='DriversEdit-container'>
        <h1 id='admin-h1'>Edit Drivers</h1>
                <table className='Drivertable' >
                <tr>
                    <th>Employee ID</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {/* <% drivers.forEach(driver => { %> */}
                    <tr>
                        <td>{employee_id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>
                            <button onClick={openOverlayEdit}><i className="fa-solid fa-pencil"></i></button>
                              {/* <input type='submit' value='edit' className='edit' name='edit'/>*/}
                        </td>
                        <td>
                            <form action='/drivers' method='post'>
                            <button><i class="fa-solid fa-x"></i></button>
                               {/* <input type='submit' value='delete' className='delete' name='delete'/>*/}
                                <input type='hidden' name='selected' value={employee_id}/>
                                <input type='hidden' name='action'  value='delete'/>
                            </form>
                        </td>
                    </tr>
                {/* <% }) %> */}
                
            </table>
            


        </div>

        </>
    )
}
