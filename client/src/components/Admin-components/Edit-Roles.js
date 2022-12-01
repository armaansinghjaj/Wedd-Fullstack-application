import React, {useState} from 'react';
import Nametag from '../Common-components/Nametag';
import './Edit-Role.css';

export default function AdminRoles() {

    const role_id='Role ID';
    const role_title='Role Title';
    const role_driver_id='driver ID';
    const edit_role_id='Edit role ID';
    const edit_title='Edit title';

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
            <div className='AdminRoles-container'>
                <Nametag id1="admin-name-tag" id2="admin-logo-display" id3="admin-name-display" text={"Admin name"} employee={"Admin"}/>
                {/* Edit employee roles page */}
                <div id='edit-roles-table-container'>
                    <h1 id='edit-roles-h1'>Edit Employee roles</h1>
                        <table className='edit-roles-table'>
                            <tr>
                                <th>Role ID</th>
                                <th>Role Title</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            {/* <% roles.forEach(role => { %> */}
                                <tr>
                                <td>{role_id}</td>
                                <td>{role_title}</td>
                                    <td>
                                            <button onClick={openOverlayEdit}><i className="fa-solid fa-pencil"></i></button>
                                            {/* <input type='submit' value='edit' className='edit' name='edit'/> */}
                                    </td>
                                    <td>
                                        <form action='/AdminRoles' >
                                            <button><i class="fa-solid fa-x"></i></button>
                                            {/*<input type='submit' value='delete'  className='delete' name='delete'/>*/ } 
                                            <input type='hidden' name='selected' value={role_driver_id}/>
                                            <input type='hidden' name='action'value='delete'/>
                                        </form>
                                    </td>
                                </tr>
                                {/* <% }) %> */}
                        </table>
                    </div>
                </div>

            {/* div for employee role add form */}
            <div className={overlayAdd}>
                <div className='add-admini'>
                    <div className={visibleAdd === true ? 'add-role' : 'add-role-hidden'}>
                    <div id='add-closeOverlay-btn-role'>
                        <button onClick={closeOverlayAdd}><i class="fa-solid fa-x"></i></button>
                    </div>
                        <h2>Add Role</h2>
                        <form action="/roles" method="post">
                            <table>
                                <tr>
                                    <td>Role Title</td>
                                    <td><input type="text" name="new_title" /></td>
                                </tr>
                            </table>
                            <input type="submit" className='deletei' value="Add"/>
                            <input type="hidden" name="action" value="add"/>
                        </form>
                    </div>
                </div>
            </div>

            {/* div for employee role edit form */}
            <div className={overlayEdit}>

                    
                    <div className={visibleEdit === true ? 'edit-role' : 'edit-role-hidden'}>
                    <div className='editadmin'>
                    <div id='edit-closeOverlay-btn-role' >
                        <button onClick={closeOverlayEdit}><i class="fa-solid fa-x"></i></button>
                    </div>
                    <h2>Edit Roles</h2>
                        <form id='edit-role-form' action="/roles" method="post">
                            <table className='Drivertable'>
                                <tr>
                                    <td>Role ID</td>
                                    <td><input type="number" name="edit_role_id" readonly value={edit_role_id}/></td>
                                </tr>
                                <tr>
                                    <td>Role Title</td>
                                    <td><input type="text" name="edit_title" value={edit_title}/></td>
                                </tr>
                            </table>
                            <input type="submit" className='editi' value="Edit"/>
                            <input type="hidden" name="action" value="update"/>
                        </form>
                    </div>
                </div>
            </div>

            {/* Add role button */}
            <div id='addButton'>
                <button id='Add-button' onClick={openOverlayAdd}><i className="fa-regular fa-square-plus fa-2x"/>
                </button>
            </div>


           
        </>
    )
}