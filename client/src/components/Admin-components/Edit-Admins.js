import React, {useState, useEffect} from 'react';
import Loader from '../Common-components/Loader';
import Cookies from 'universal-cookie';
import './AdminPages.css';
import './Edit-admin.css'

export default function AdminEdit() {

    //VVVV----------------------------INSTANTIATE------------------------------------------VVVV//
    const cookie = new Cookies();

    //VVVV----------------------------STATES------------------------------------------VVVV//

    const [editAdminEmail, setEditAdminEmail] = useState('');
    const [editAdminName, setEditAdminName] = useState('');
    const [newAdminName, setNewAdminName] = useState('');
    const [newAdminEmail, setNewAdminEmail] = useState('');
    const [newAdminPassword, setNewAdminPassword] = useState('');
    const [editAdminId, setEditAdminId] = useState('');
    const [deleteAdminId, setDeleteAdminId] = useState('');
    const [loader, setLoader] = useState(false);

    const [accessForbidden, setAccessForbidden] = useState(false);

    //VVVV----------------------------STATE HANLERS------------------------------------------VVVV//

    const handleEditNameInput = (e) => {
        setEditAdminName(e.target.value);
    }
    const handleEditEmailInput = (e) => {
        setEditAdminEmail(e.target.value);
    }

    const handleNewNameInput = (e) => {
        setNewAdminName(e.target.value);
    }
    const handleNewEmailInput = (e) => {
        setNewAdminEmail(e.target.value);
    }
    const handleNewPasswordInput = (e) => {
        setNewAdminPassword(e.target.value);
    }

    const handleHiddenAdminId = (e) => {
        setDeleteAdminId(e.target.value);
    }

    //VVVV----------------------------FORM HANLERS AND FETCH------------------------------------------VVVV//

    useEffect( () => {
        fetchAdmins();
    }, []);

    const [admins, setAdmins] = useState([]);

    const fetchAdmins = () => {

        setLoader(true);
        fetch('/api/admin/adminlist', {
            credentials: 'same-origin',
            mode: 'cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(admins => admins.json())
        .then(admins => {
            if(admins.status === 403){
                setAccessForbidden(true);
                alert(admins.message);
            }
            else if(admins.status === 404){
                setAdmins([]);
            } else{
                setAdmins(admins);
            }
            setLoader(false);
        })
    };

    const handleAdminUpdateForm = (e) => {
        e.preventDefault();
        setLoader(true);

        if(editAdminEmail === '' || editAdminName === ''){
            //checking if email is empty

            // checking if name is empty

        }
        else{
            const editAdmin_data = {
                edit_email: editAdminEmail,
                edit_name: editAdminName,
                flag: Number(cookie.get("_eemail")===editAdminEmail)
            }
            fetch(`/api/admin/adminlist/put/${editAdminId}`, {
                credentials: 'same-origin',
                mode: 'cors',
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editAdmin_data),
            })
            .then(editAdmin_response => editAdmin_response.json())
            .then(editAdmin_response => {
                window.confirm(editAdmin_response.message);
                setVisibleEdit(!visibleEdit);
                setLoader(false);
                cookie.remove("_eemail");
                fetchAdmins();
            })
        }
    }

    const handleAdminAddForm = (e) => {
        e.preventDefault();
        setLoader(true);

        if(newAdminEmail === '' || newAdminName === '' || newAdminPassword === ''){
            // TO-DO:
            //checking if email is empty

            // checking if name is empty

        }
        else{
            const newAdmin_data = {
                new_name: newAdminName,
                new_email: newAdminEmail,
                new_password: newAdminPassword
            }
            fetch(`/api/admin/adminlist/post/0`, {
                credentials: 'same-origin',
                mode: 'cors',
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newAdmin_data),
            })
            .then(newAdmin_response => newAdmin_response.json())
            .then(newAdmin_response => {
                setLoader(false);
                alert(newAdmin_response.message)
                setVisibleAdd(!visibleAdd);
                fetchAdmins();
            })
        }
    }

    const handleAdminDeleteForm = (e) => {
        e.preventDefault();
        setLoader(true);
        
        if(deleteAdminId !== ""){
            fetch(`/api/admin/driverlist/${deleteAdminId}`, {
                credentials: 'same-origin',
                mode: 'cors',
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(deleteAdmin_response => deleteAdmin_response.json())
            .then(deleteAdmin_response => {
                window.confirm(deleteAdmin_response.message);

                // TO-DO: COLSE THE DELETE OVERLAY HERE AFTER PROCESSING THE REQUEST
                setLoader(false);
                setVisibleDelete(!visibleDelete);
                fetchAdmins();
            })
        }
    }

    const getDataById = (id, flag) => {
        setLoader(true);
        
        fetch(`/api/admin/adminlist/${id}`, {
            credentials: 'same-origin',
            mode: 'cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(adminData => adminData.json())
        .then(adminData => {
            switch(flag){
                case 0: {
                    cookie.set("_eemail", adminData.email, { path: '/admin/adminlist', maxAge: '3600', secure: false, sameSite: 'strict'});
                    setEditAdminEmail(adminData.email)
                    setEditAdminName(adminData.name)
                    setEditAdminId(adminData._id);
                    setLoader(false);
                    break;
                }
                case 1: {
                    setDeleteAdminId(adminData._id);
                    setLoader(false);
                    break;
                }
                default: break;
            }
        })
    }

    //VVVV--------------------------------OVERLAYS--------------------------------------VVVV//

    const [visibleEdit, setVisibleEdit] = useState(false) 
    const [visibleAdd, setVisibleAdd] = useState(false) 
    const [visibleDelete, setVisibleDelete] = useState(false) 

    const openOverlayEdit = (value) => {
        getDataById(value.nativeEvent.srcElement.parentElement.value, 0)
        setVisibleEdit(!visibleEdit);
    }
    const closeOverlayEdit = () => {
        setEditAdminEmail('')
        setEditAdminName('')
        setNewAdminName('')
        setNewAdminEmail('')
        setNewAdminPassword('')
        setEditAdminId('')
        setDeleteAdminId('')
        setAccessForbidden(false)
        setVisibleEdit(!visibleEdit);
    }

    // DELETE OVERLAY
    const openOverlayDelete = (value) => {
        getDataById(value.nativeEvent.srcElement.parentElement.value, 1)
        setVisibleDelete(!visibleDelete);
    }
    const closeOverlayDelete = () => {
        setEditAdminEmail('')
        setEditAdminName('')
        setNewAdminName('')
        setNewAdminEmail('')
        setNewAdminPassword('')
        setEditAdminId('')
        setDeleteAdminId('')
        setAccessForbidden(false)
        setVisibleDelete(!visibleDelete);
    }

    const openOverlayAdd = () => {
        setVisibleAdd(!visibleAdd);
    }
    const closeOverlayAdd = () => {
        setEditAdminEmail('')
        setEditAdminName('')
        setNewAdminName('')
        setNewAdminEmail('')
        setNewAdminPassword('')
        setEditAdminId('')
        setDeleteAdminId('')
        setAccessForbidden(false)
        setVisibleAdd(!visibleAdd);
    }

    return(
        <>

        {/* Loader component */}
        {loader && <Loader/>}

        {/* Display Admin list */}
        <div className='AdminEdit-container'>
            <div className='Admintable'>
            <h1 id='admin-edit-h1'>Edit Admins
            <div id='addButton'>
                    <button id='Add-button' onClick={openOverlayAdd}><i className="fa-regular fa-square-plus fa-2x"/>
                    </button>
                </div>
                </h1>
                <table className='edit-admin-table'>
                    <thead>
                        <tr id='edit-admin-tr'>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    {admins.map((admin, i) =>{
                        return <tbody key={i}>
                            <tr>
                                <td>{admin.name}</td>
                                <td>{admin.email}</td>
                                <td>
                                    <button value={admin._id} onClick={openOverlayEdit}><i className="fa-solid fa-pencil"></i></button>
                                </td>
                                <td>
                                    <button value={admin._id} onClick={openOverlayDelete}><i className="fa-solid fa-x"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    })}
                </table>
            </div>
        </div>

        {/* DELETE DRIVER FORM */}
        <div >
        <div className={visibleDelete ? "overlay-visibleDelete" : "overlay-hiddenDelete"}>
                <div className={visibleDelete === true ? 'delete-Admin' : 'delete-Admin-hidden'}>
                    <div id='edit-closeOverlay-btn-driver' >
                        <button onClick={closeOverlayDelete}><i className="fa-solid fa-x"></i></button>
                    </div>
                <h2>Delete Admin</h2>
                <div>
                    <form method="delete" onSubmit={handleAdminDeleteForm}>
                        <table className="admin-tab">
                            <tbody>
                                <tr>
                                    <td>Permanantly delete admin?</td>
                                </tr>
                            </tbody>
                        </table>
                        <input type="submit" className='editi' value="Confirm"/>
                        <input type="reset" onClick={closeOverlayDelete} className='editi' value="Cancel"/>
                        <input type="hidden" onChange={handleHiddenAdminId} value={deleteAdminId}/>
                    </form>
                </div>
            </div>
        </div>
        </div>

        {/* EDIT ADMIN FORM */}
        <div className={visibleEdit ? "overlay-visibleEdit" : "overlay-hiddenEdit"}>
            <div className={visibleEdit === true ? 'edit-role' : 'edit-role-hidden'}>
                <div id='edit-closeOverlay-btn-admin' >
                    <button onClick={closeOverlayEdit}><i className="fa-solid fa-x"></i></button>
                </div>
                    <h2>Edit Admin</h2>
                    <div >
                        <form method="put" onSubmit={handleAdminUpdateForm}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>E-Mail</td>
                                        <td>
                                            <input type="email" name="edit_email" onChange={handleEditEmailInput} value={editAdminEmail}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Name</td>
                                        <td>
                                            <input type="text" name="edit_name" onChange={handleEditNameInput} value={editAdminName}/>
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

        {/* ADD BUTTON */}


        {/* ADD ADMIN FORM */}
        <div className={visibleAdd ? "overlay-visibleAdd" : "overlay-hiddenAdd"}>
            <div className={visibleAdd === true ? 'edit-role' : 'edit-role-hidden'}>
            <div id='add-closeOverlay-btn-admin'>
                    <button onClick={closeOverlayAdd}><i className="fa-solid fa-x"></i></button>
                </div>
                <h2>Add Admin
                </h2>
                <div >
                    <form method="put" onSubmit={handleAdminAddForm}>       
                        <table>
                            <tbody>
                                <tr>
                                    <td>E-Mail</td>
                                    <td>
                                        <input type="email" name="new_email" onChange={handleNewEmailInput} value={newAdminEmail}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td>
                                        <input type="text" name="new_name" onChange={handleNewNameInput} value={newAdminName}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Password</td>
                                    <td>
                                        <input type="password" name="new_password" onChange={handleNewPasswordInput} value={newAdminPassword}/>
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