import React, {useEffect, useState} from "react";
import Loader from '../Common-components/Loader';
import Cookies from 'universal-cookie';
import ProfilePage from "../Customer-components/Profilepage-components/ProfilePage";
import './EmployeeProfile.css';
import { Navigate } from "react-router-dom";

export default function EmployeeProfile() {

    //VVVV----------------------------INSTANTIATE------------------------------------------VVVV//
    const cookie = new Cookies();

    //VVVV----------------------------STATES------------------------------------------VVVV//

    const [editUserEmail, setEditUserEmail] = useState('');
    const [editUserName, setEditUserName] = useState('');
    const [userOldPassword, setOldPassword] = useState('');
    const [userNewPassword, setNewPassword] = useState('');
    const [userConfirmPassword, setConfirmPassword] = useState('');
    const [loader, setLoader] = useState(false);

    const [accessForbidden, setAccessForbidden] = useState(false);
    const [userDeleted, setUserDeleted] = useState(false);

    //VVVV----------------------------STATE HANLERS------------------------------------------VVVV//
    const handleEditEmailChange = (e) =>{
        setEditUserEmail(e.target.value);
    }

    const handleEditNameChange = (e) =>{
        setEditUserName(e.target.value);
    }

    const handleEditOldPassword = (e) =>{
        setOldPassword(e.target.value);
    }

    const handleEditNewPassword = (e) =>{
        setNewPassword(e.target.value);
    }

    const handleEditConfirmPassword = (e) =>{
        setConfirmPassword(e.target.value);
    }

    //VVVV----------------------------FORM HANLERS AND FETCH------------------------------------------VVVV//

    useEffect( () => {
        closeAllOverlays();
        fetchUserDetails();
    }, []);

    const [userDetails, setUserDetails] = useState({});

    const fetchUserDetails = () => {

        setLoader(true);
        fetch(`/api/employeeprofile/${cookie.get("__sid")}`, {
            credentials: 'same-origin',
            mode: 'cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(user => user.json())
        .then(user => {
            if(user.status === 403){
                setAccessForbidden(true)
            }
            else if(user.status === 404){
                setUserDetails({});
            } else{
                setUserDetails(user);
            }
            setLoader(false);
        })
    };

    const handleInfoUpdateForm = (e) => {
        e.preventDefault();
        setLoader(true);

        if(editUserEmail === '' || editUserName === ''){
            //checking if email is empty

            // checking if name is empty

        }
        else{
            const editUser_data = {
                edit_email: editUserEmail,
                edit_name: editUserName,
                emailFlag: Number(cookie.get("_editemail")!==editUserEmail) // 0 if email not changed, 1 if changed 
            }
            fetch(`/api/employeeprofile/${cookie.get("__sid")}/information`, {
                credentials: 'same-origin',
                mode: 'cors',
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editUser_data),
            })
            .then(editUser_response => editUser_response.json())
            .then(editUser_response => {
                window.confirm(editUser_response.message);
                setEditProfile(!editProfile);
                setLoader(false);
                cookie.remove("_eemail");
                fetchUserDetails();
            })
        }
    }

    const handlePasswordUpdateForm = (e) => {
        e.preventDefault();
        setLoader(true);

        if(userOldPassword === '' || userNewPassword === '' || userConfirmPassword === ''){
            //checking if passwords is empty

        }
        else{
            const editPassword_data = {
                old_password: userOldPassword,
                new_password: userNewPassword,
                confirm_password: userConfirmPassword
            }
            fetch(`/api/employeeprofile/${cookie.get("__sid")}/password`, {
                credentials: 'same-origin',
                mode: 'cors',
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editPassword_data),
            })
            .then(editPassword_response => editPassword_response.json())
            .then(editPassword_response => {
                window.confirm(editPassword_response.message);
                setChangePassword(!changePassword);
                setLoader(false);
                fetchUserDetails();
            })
        }
    }

    const handleDeleteUser = (e) =>{
        e.preventDefault();
        setLoader(true);

        fetch(`/api/employeeprofile/${cookie.get("__sid")}`, {
            credentials: 'same-origin',
            mode: 'cors',
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(deleteUser_response => deleteUser_response.json())
        .then(deleteUser_response => {
            window.confirm(deleteUser_response.message);

            // TO-DO: COLSE THE DELETE OVERLAY HERE AFTER PROCESSING THE REQUEST
            setLoader(false);
            if(deleteUser_response.status === 200){
                setUserDeleted(true);
                cookie.remove("c_user");
                cookie.remove("__sid");
            } else {
                window.alert(deleteUser_response.message);
            }
            setDeleteAccount(!deleteAccount);
            fetchUserDetails();
        })
    }

    const getDataById = (id) => {
        setLoader(true);
        
        fetch(`/api/employeeprofile/${id}`, {
            credentials: 'same-origin',
            mode: 'cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(userData => userData.json())
        .then(userData => {
            cookie.set("_editemail", userData.email, { path: '/Admin', maxAge: '3600', secure: false, sameSite: 'strict'});
            setEditUserEmail(userData.email)
            setEditUserName(userData.name)
            setLoader(false);
        })
    }

    //VVVV--------------------------------OVERLAYS--------------------------------------VVVV//

    const [editProfile, setEditProfile] = useState(false);
    const [changePassword, setChangePassword] = useState(false);
    const [deleteAccount, setDeleteAccount] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    // Functions
    const closeAllOverlays = () =>{
        setShowMenu(false);
        setEditProfile(false);
        setChangePassword(false);
        setDeleteAccount(false);
        setEditUserEmail('')
        setEditUserName('')
        setOldPassword('')
        setNewPassword('')
        setNewPassword('')
        setConfirmPassword('')
        setLoader('')
    }

    // Open menu
    const menuHandler = () => {
        closeAllOverlays();
        setShowMenu(!showMenu);
    }

    // Open hidden forms
    const profileEdit = () => {
        closeAllOverlays();
        getDataById(cookie.get("__sid"))
        setEditProfile(!editProfile)
    }
    const passwordChange = () => {
        closeAllOverlays();
        setChangePassword(!changePassword)
    }

    const remove = () => {
        closeAllOverlays();
        setDeleteAccount(!deleteAccount)
    }

    // Close hidden forms
    const closeEdit = () => {
        setEditProfile(!editProfile)
    }
    const closeChange = () => {
        setChangePassword(!changePassword)
    }
    const closeRemove = () => {
        setDeleteAccount(!deleteAccount)
    }

    return(
        <>

        {/* Loader component */}
        {loader && <Loader/>}

        {/* Access Denied, redirect to Logout */}
        {accessForbidden && (<Navigate replace to={"/login"}/>)}

        {/* Redirect on delete account */}
        {userDeleted && (<Navigate replace to={"/"}/>)}

        <div className='ellipse-menu-container' id='ellipse-menu-container'>
            <div className='ellipse-menu-user-name'>Admin Name</div>
            <i className="fa fa-ellipsis-v ellipse-menu" onClick={menuHandler} aria-hidden="true"></i>
        </div>
        {(showMenu === true) ? (
            <div className='menu-parent-container' id='menu-parent-container'>
            <div className='menu-wrapper'>
                <div className='menu-list'>
                    <div className='menu-list-item item-delete-account' onClick={remove}>Delete Account</div>
                </div>
            </div>
        </div>)
        : ("")
        }

        {/* Display admin profile info */}
        <div className="admin-settings-display">
            <h1 id="profile-settings-h1">
                Profile Settings
            </h1>
            <div className="admin-general-settings">
            <p className="admin-profile-heading-general" id="general-settings-header">General Settings</p>
                <ul id="admin-edit-profile-ul">
                    <li>
                        <p><span className="admin-first-word">Name:</span> {userDetails.name}</p>
                    </li>
                    <li>
                        <p><span className="admin-first-word">Email:</span> {userDetails.email}</p>
                    </li>
                </ul>
                <button className="admin-edit-button" onClick={profileEdit}>
                        Edit details
                </button>
            </div>
            <div id="divider"/>
            <div className="admin-password-change">
                <p className="admin-profile-heading-general">Change password</p>
                <ul>
                    <li>
                        <button className="admin-edit-button" onClick={passwordChange}>Change Password</button>
                    </li>
                </ul>
            </div>
        </div>

                    
        {/* Hidden delete profile form */}
        <div id={deleteAccount ?"admin-delete-account-overlay-active" : "admin-delete-account-overlay"}>
            <div id={deleteAccount ? "admin-delete-profile-form-active": "admin-delete-profile-form"}>
                <form method="delete" onSubmit={handleDeleteUser}>
                    <div className={"delete-confirmation"}>
                        <h1 id="delete-warning">WARNING!</h1>
                        <p>Once you delete your account, there is no going back. Please be certain.</p>
                        <input type="submit" id="admin-submit-confirm" value="Confirm"/> <input type="reset"  id="admin-submit-cancel" className="delete_account_btn" value="Cancel" onClick={closeRemove}/>
                    </div>
                </form>
            </div>
        </div>
        

        {/* Hidden admin name edit form */}
        <div id={editProfile ?"admin-delete-account-overlay-active" : "admin-delete-account-overlay"}>
                <div id={editProfile ? "admin-edit-form-active" :"admin-edit-form"}>
                    <h1 id="admin-change-profile">Edit profile</h1>
                    <form method="put" onSubmit={handleInfoUpdateForm}>
                        <ul>
                            <li id="admin-name"><input type="text" name="employee_name" id="admin-employee-name" onChange={handleEditNameChange} value={editUserName}/></li>
                            <li id="admin-inputemail"><input type="email" name="employee_email" id="admin-employee-email" onChange={handleEditEmailChange} value={editUserEmail}/></li>
                            <div className="admin-edit-profile-btns">
                                <input type="submit" className="admin-submit" value="Update"/>
                                <input type="reset" className="admin-submit" value="Cancel" onClick={closeEdit}/>
                            </div>
                        </ul>
                    </form>
                </div>
            </div>

            {/* Hidden admin password change form */}
            <div id={changePassword ?"admin-delete-account-overlay-active" : "admin-delete-account-overlay"}>
                <div className={changePassword ? "admin-password-form-active" : "admin-password-form"}>
                    <h1 id="admin-change-profilec">Change password</h1>
                    <form method="put" onSubmit={handlePasswordUpdateForm}>
                        <ul>
                            <li><input type="password" name="employee_password[old]" id="admin-old-password" placeholder="Old Password" onChange={handleEditOldPassword} value={userOldPassword}/></li>
                            <li><input type="password" name="employee_password[new]" id="admin-new-password" placeholder="New Password" onChange={handleEditNewPassword} value={userNewPassword}/></li>
                            <li><input type="password" name="employee_password[confirm]" id="admin-confirm-password" placeholder="Confirm Password" onChange={handleEditConfirmPassword} value={userConfirmPassword}/></li>
                            <input type="submit"  id="admin-submit" value="Update"/>
                            <input type="reset"  id="admin-submit" value="cancel" onClick={closeChange}/>
                        </ul>
                    </form>
                </div>
            </div>
        </>
    )
}