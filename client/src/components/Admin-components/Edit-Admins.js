import React, {useState, useEffect} from 'react';
import Nametag from "../Common-components/Nametag";
import './AdminPages.css';

export default function AdminEdit() {

    //PLACEHOLDERS
    const admin_employee_id='1234567';
    const admin_edit_employee_id='1234567';
    const admin_edit_email='Admin name';
    const admin_edit_name='email@email.com';

    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/api/admin/adminlist');
        const items = await data.json();
        setItems(items);
    };

    const [visibleEdit, setVisibleEdit] = useState(false) 
    const [visibleAdd, setVisibleAdd] = useState(false) 

    const overlayEdit= visibleEdit ? "overlay-visibleEdit" : "overlay-hiddenEdit";
    const overlayAdd= visibleAdd ? "overlay-visibleAdd" : "overlay-hiddenAdd";

    const openOverlayEdit = () => {setVisibleEdit(!visibleEdit);}

    const openOverlayAdd = () => {setVisibleAdd(!visibleAdd);}

    return(
        <>
        {/* Display Admin list */}
        <div className='AdminEdit-container'>
            <Nametag id1="admin-name-tag" id2="admin-logo-display" id3="admin-name-display" text={"Admin name"} employee={"Admin"}/>
            <div className='Admintable'>
            <h1 id='admin-edit-h1'>Edit Admins</h1>
                <table className='edit-admin-table'>
                    <thead>
                        <tr id='edit-admin-tr'>
                            <th>Employee ID</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    {items.map(item =>{
                        return <tbody>
                            <tr>
                                <td>{item.employee_id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>

                                    <button onClick={openOverlayEdit}><i className="fa-solid fa-pencil"></i></button>
                                    {/* <input type='submit' value='edit' className='edit' name='edit'/>*/}
                                        <input type='hidden' name='selected' value={admin_employee_id}/>
                                        <input type='hidden' name='action'  value='edit'/>

                                </td>
                                <td>
                                    <form action='/admins' method='post'>
                                    <button><i className="fa-solid fa-x"></i></button>
                                    {/*  <input type='submit' value='delete' className='delete' name='delete'/>*/}
                                        <input type='hidden' name='selected' value={admin_employee_id}/>
                                        <input type='hidden' name='action'  value='delete'/>
                                    </form>
                                </td>
                            </tr>
                        </tbody>
                    })}
                </table>
            </div>
        </div>
            {/* edit Admin form */}
            <div className={overlayEdit}>
                <div className={visibleEdit === true ? 'edit-role' : 'edit-role-hidden'}>
                    <div id='edit-closeOverlay-btn-admin' >
                        <button onClick={openOverlayEdit}><i className="fa-solid fa-x"></i></button>
                    </div>
                        <h2>Edit Admin</h2>
                        <div >
                            <form>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Employee ID</td>
                                            <td>
                                                <input type="number" name="edit_employee_id" readOnly value={admin_edit_employee_id}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>E-Mail</td>
                                            <td>
                                                <input type="email" name="edit_email" readOnly value={admin_edit_email}/>
                                                </td>
                                        </tr>
                                        <tr>
                                            <td>Name</td>
                                            <td>
                                                <input type="text" name="edit_name" readOnly value={admin_edit_name}/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <input type="submit"  className='editi' value="Edit"></input>
                                <input type="hidden" name="action" value="update"/>
                            </form>
                        </div>
    
                </div>
            </div>
            {/* Add button */}
            <div id='addButton'>
                <button id='Add-button' onClick={openOverlayAdd}><i className="fa-regular fa-square-plus fa-2x"/>
                </button>
            </div>
            {/* add Admin form */}
            <div className={overlayAdd}>
                <div className={visibleAdd === true ? 'edit-role' : 'edit-role-hidden'}>
                <div id='add-closeOverlay-btn-admin'>
                        <button onClick={openOverlayAdd}><i className="fa-solid fa-x"></i></button>
                    </div>
                    <h2>Add Admin</h2>
                    <div >
                        <form>       
                            <table>
                                <tbody>
                                    <tr>
                                        <td>E-Mail</td>
                                        <td>
                                            <input type="email" name="new_email" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Name</td>
                                        <td>
                                            <input type="text" name="new_name" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Password</td>
                                        <td>
                                            <input type="password" name="new_password" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <input type='submit' className='deletei' value='add'></input>
                            <input type="hidden" name="action" value="add"/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    ) 
}