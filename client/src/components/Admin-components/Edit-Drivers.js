import React, {useState, useEffect} from 'react';
import Loader from '../Common-components/Loader';
import Nametag from '../Common-components/Nametag';
import Cookies from 'universal-cookie';
import './Edit-Drivers.css';

export default function AdminDriversEdit() {

    //VVVV----------------------------INSTANTIATE------------------------------------------VVVV//
    const cookie = new Cookies();

    //VVVV----------------------------STATES------------------------------------------VVVV//

    const [editEmail, setEditEmail] = useState('');
    const [editName, setEditName] = useState('');
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [editDriverId, setEditDriverId] = useState('');
    const [deleteDriverId, setDeleteDriverId] = useState('');
    const [loader, setLoader] = useState(false);

    const [accessForbidden, setAccessForbidden] = useState(false);

    //VVVV----------------------------STATE HANDLERS------------------------------------------VVVV//

    const handleEditNameInput = (e) => {
        setEditName(e.target.value);
    }
    const handleEditEmailInput = (e) => {
        setEditEmail(e.target.value);
    }
    
    const handleNewNameInput = (e) => {
        setNewName(e.target.value);
    }
    const handleNewEmailInput = (e) => {
        setNewEmail(e.target.value);
    }
    const handleNewPasswordInput = (e) => {
        setNewPassword(e.target.value);
    }

    const handleHiddenDriverId = (e) => {
        setEditDriverId(e.target.value);
    }
    const handleHiddenDeleteDriverId = (e) => {
        setDeleteDriverId(e.target.value);
    }

    //VVVV----------------------------FORM HANLERS AND FETCH------------------------------------------VVVV//

    const [drivers, setDrivers] = useState([]);
    const [driverDetails, setDriverDetails] = useState([]);

    useEffect( () => {
        fetchDrivers();
    }, []);

    useEffect(()=>{
        setDeleteDriverId(deleteDriverId)
    }, [deleteDriverId])

    const fetchDrivers = () => {
        setLoader(true);

        fetch('/api/admin/driverlist', {
            credentials: 'same-origin',
            mode: 'cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(drivers => drivers.json())
        .then(drivers => {
            if(drivers.status === 403){
                setAccessForbidden(true);
                alert(drivers.message);
            }
            else if(drivers.status === 404){
                setDrivers([]);
            } else{
                setDrivers(drivers);
            }
            setLoader(false);
        })
        
    };

    const handleDriverUpdateForm = (e) => {
        e.preventDefault();
        setLoader(true);

        if(editEmail === '' || editName === ''){
            //checking if email is empty

            // checking if name is empty

        }
        else{
            const editDriver_data = {
                edit_email: editEmail,
                edit_name: editName,
                flag: Number(cookie.get("_eemail") === editEmail)
            }
            console.log(editDriver_data.flag);
            fetch(`/api/admin/driverlist/put/${editDriverId}`, {
                credentials: 'same-origin',
                mode: 'cors',
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editDriver_data),
            })
            .then(editDriver_response => editDriver_response.json())
            .then(editDriver_response => {
                window.confirm(editDriver_response.message);
                setVisibleEdit(!visibleEdit);
                setLoader(false);
                fetchDrivers();
            })
        }
    }

    const handleDriverAddForm = (e) => {
        e.preventDefault();
        setLoader(true);

        if(newEmail === '' || newName === '' || newPassword === ''){
            //checking if email is empty

            // checking if name is empty

        }
        else{
            const newDriver_data = {
                new_name: newName,
                new_email: newEmail,
                new_password: newPassword
            }
            fetch(`/api/admin/driverlist/post/0`, {
                credentials: 'same-origin',
                mode: 'cors',
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newDriver_data),
            })
            .then(newDriver_response => newDriver_response.json())
            .then(newDriver_response => {
                setLoader(false);
                alert(newDriver_response.message)
                setVisibleAdd(!visibleAdd);
                fetchDrivers();
            })
        }
    }

    const handleDriverDeleteForm = (e) => {
        e.preventDefault();
        setLoader(true);
        
        if(deleteDriverId !== ""){
            fetch(`/api/admin/driverlist/${deleteDriverId}`, {
                credentials: 'same-origin',
                mode: 'cors',
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(deleteDriver_response => deleteDriver_response.json())
            .then(deleteDriver_response => {
                window.confirm(deleteDriver_response.message);

                // TO-DO: COLSE THE DELETE OVERLAY HERE AFTER PROCESSING THE REQUEST
                setLoader(false);
                setVisibleDelete(!visibleDelete);
                fetchDrivers();
            })
        }
    }

    const getDataById = (id, flag) => {
        setLoader(true);
        
        fetch(`/api/admin/driverlist/${id}`, {
            credentials: 'same-origin',
            mode: 'cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(driverData => driverData.json())
        .then(driverData => {
            switch(flag){
                case 0: {
                    cookie.set("_eemail", driverData.email, { path: '/admin/driverlist', maxAge: '3600', secure: false, sameSite: 'strict'});
                    setEditEmail(driverData.email)
                    setEditName(driverData.name)
                    setEditDriverId(driverData._id);
                    setLoader(false);
                    break;
                }
                case 1: {
                    setDeleteDriverId(driverData._id);
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

    const overlayEdit = visibleEdit ? "overlay-visibleEdit" : "overlay-hiddenEdit";
    const overlayDelete = visibleDelete ? "overlay-visibleDelete" : "overlay-hiddenDelete";
    const overlayAdd = visibleAdd ? "overlay-visibleAdd" : "overlay-hiddenAdd";

    // EDIT OVERLAY
    const openOverlayEdit = (value) => {
        getDataById(value.nativeEvent.srcElement.parentElement.value, 0)
        setVisibleEdit(!visibleEdit);
    }
    const closeOverlayEdit = () => {
        setEditEmail('')
        setEditName('')
        setNewName('')
        setNewEmail('')
        setNewPassword('')
        setEditDriverId('')
        setDeleteDriverId('')
        setAccessForbidden(false)
        setDriverDetails([])
        setVisibleEdit(!visibleEdit);
    }

    // DELETE OVERLAY
    const openOverlayDelete = (value) => {
        getDataById(value.nativeEvent.srcElement.parentElement.value, 1)
        setVisibleDelete(!visibleDelete);
    }
    const closeOverlayDelete = () => {
        // TO-DO
        setEditEmail('')
        setEditName('')
        setNewName('')
        setNewEmail('')
        setNewPassword('')
        setEditDriverId('')
        setDeleteDriverId('')
        setAccessForbidden(false)
        setDriverDetails([])
        setVisibleDelete(!visibleDelete);
    }

    // ADD OVERLAY
    const openOverlayAdd = () => {
        setVisibleAdd(!visibleAdd);
    }
    const closeOverlayAdd = () => {
        setEditEmail('')
        setEditName('')
        setNewName('')
        setNewEmail('')
        setNewPassword('')
        setDeleteDriverId('')
        setEditDriverId('')
        setAccessForbidden(false)
        setDriverDetails([])
        setVisibleAdd(!visibleAdd);
    }

    return(
        <>
        {/* Loader component */}
        {loader && <Loader/>}

        {/* Edit Driver Form */}
        <div >
        <div className={overlayEdit}>
                <div className={visibleEdit === true ? 'edit-role' : 'edit-role-hidden'}>
                    <div id='edit-closeOverlay-btn-driver' >
                        <button onClick={closeOverlayEdit}><i className="fa-solid fa-x"></i></button>
                    </div>
                <h2>Edit driver</h2>
                <div>
                    <form method="put" onSubmit={handleDriverUpdateForm}>
                        <table className="driver-tab">
                            <tbody>
                                <tr>
                                    <td>E-mail</td>
                                    <td><input type="email" name="edit_email" onChange={handleEditEmailInput} value={editEmail}/></td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td><input type="text" name="edit_name" onChange={handleEditNameInput} value={editName}/></td>
                                </tr>
                            </tbody>
                        </table>
                        <input type="submit" className='editi' value="Edit"/>
                        <input type="hidden" name="id" onChange={handleHiddenDriverId} value={editDriverId}/>
                    </form>
                </div>
            </div>
        </div>
        </div>

        {/* DELETE DRIVER FORM */}
        <div >
        <div className={overlayDelete}>
                <div className={visibleDelete === true ? 'delete-driver' : 'delete-driver-hidden'}>
                    <div id='edit-closeOverlay-btn-driver' >
                        <button onClick={closeOverlayDelete}><i className="fa-solid fa-x"></i></button>
                    </div>
                <h2>Delete driver</h2>
                <div>
                    <form method="delete" onSubmit={handleDriverDeleteForm}>
                        <table className="driver-tab">
                            <tbody>
                                <tr>
                                    <td>Permanantly delete driver?</td>
                                </tr>
                            </tbody>
                        </table>
                        <input type="submit" className='editi' value="Confirm"/>
                        <input type="reset" onClick={closeOverlayDelete} className='editi' value="Cancel"/>
                        <input type="hidden" onChange={handleHiddenDeleteDriverId} value={deleteDriverId}/>
                    </form>
                </div>
            </div>
        </div>
        </div>

        {/* Add Driver Form */}
        <div className={overlayAdd}>
        <div className={visibleAdd === true ? 'edit-role' : 'edit-role-hidden'}>
                    <div id='add-closeOverlay-btn-driver'>
                        <button onClick={closeOverlayAdd}><i className="fa-solid fa-x"></i></button>
                    </div>
                <h2>Add driver</h2>
                <div>
                    <form method="put" onSubmit={handleDriverAddForm}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>E-mail</td>
                                    <td><input type="email" name="new_email" onChange={handleNewEmailInput} value={newEmail}/></td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td><input type="text" name="new_name" onChange={handleNewNameInput} value={newName}/></td>
                                </tr>
                                <tr>
                                    <td>Password</td>
                                    <td><input type="password" name="new_password" onChange={handleNewPasswordInput} value={newPassword}/></td>
                                </tr>
                            </tbody>
                        </table>
                        <input type="submit" className='deletei' value="Add"/>
                        {/* <input type="hidden" name="action" value="add"/> */}
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
        <Nametag id1="admin-name-tag" id2="admin-logo-display" id3="admin-name-display" text={"Admin name"} employee={cookie.get("c_user")}/>
        <div id='Driver-table-container'>
            <h1 id='Driver-edit-h1'>Edit Drivers</h1>
                <table className='edit-driver-table' >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                        {drivers.map((driver, i) => { 
                            return <tbody key={i}>
                                <tr>
                                    <td>{driver.name}</td>
                                    <td>{driver.email}</td>
                                    <td>
                                        <button value={driver._id} onClick={openOverlayEdit}><i className="fa-solid fa-pencil"></i></button>
                                    </td>
                                    <td>
                                        <button value={driver._id} onClick={openOverlayDelete}><i className="fa-solid fa-x"></i></button>
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
