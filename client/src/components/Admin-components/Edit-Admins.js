import React, {useState, useEffect} from 'react';
import Loader from '../Common-components/Loader';
import './AdminPages.css';

export default function AdminEdit() {

    //PLACEHOLDERS
    const admin_employee_id='1234567';
    const admin_edit_employee_id='1234567';
    const admin_edit_email='Admin name';
    const admin_edit_name='email@email.com';

    const [loader, setLoader] = useState(false);

    useEffect( () => {
        fetchAdmins();
    }, []);

    const [admins, setItems] = useState([]);

    const fetchAdmins = () => {

        setLoader(true);

        // fetch('/api/admin/driverlist', {
        //     credentials: 'same-origin',
        //     mode: 'cors',
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // })
        // .then(drivers => drivers.json())
        // .then(drivers => {
        //     if(drivers.status === 403){
        //         setAccessForbidden(true);
        //         alert(drivers.message);
        //     }
        //     else if(drivers.status === 404){
        //         setDrivers([]);
        //     } else{
        //         setDrivers(drivers);
        //     }
        //     setLoader(false);
        // })

        const data = fetch('/api/admin/adminlist');
        const admins = data.json();
        setItems(admins);
    };

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

        {/* Loader component */}
        {loader && <Loader/>}

            {/* edit Admin form */}
            <div className={overlayEdit}>
                <div className={visibleEdit === true ? 'edit-role' : 'edit-role-hidden'}>
                    <div id='edit-closeOverlay-btn-admin' >
                        <button onClick={closeOverlayEdit}><i className="fa-solid fa-x"></i></button>
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
                        <button onClick={closeOverlayAdd}><i className="fa-solid fa-x"></i></button>
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
            {/* Display Admin list */}
            <div className='AdminEdit-container'>
            <div className='Admintable'>
            <h1 id='admin-h1'>Edit Admins</h1>
                <table className='Drivertable'>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    {admins.map(item =>{
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
        </>
    ) 
}