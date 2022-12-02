import React, {useEffect, useState} from "react";
import './EmployeeProfile.css';


export default function EmployeeProfile() {

    const adminName = "Admin Name";
    const adminEmail = "AdminEmail@email.com";

    const [editProfile, setEditProfile] = useState(false);
    const [changePassword, setChangePassword] = useState(false);
    const [deleteAccount, setDeleteAccount] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    // useEffect( () => {
    //     fetchAdminDetails();
    // }, []);

    const [adminDetails, setAdminDetails] = useState([]);

    // const fetchAdminDetails = async () => {
    //     const data = await fetch('/api/employeeprofile/');
    //     const adminDetails = await data.json();
    //     setAdminDetails(adminDetails);
    // };

    // Functions
    const closeAllOverlays = () =>{
        setShowMenu(false);
        setEditProfile(false);
        setChangePassword(false);
        setDeleteAccount(false);
    }

    // Open menu
    const menuHandler = () => {
        closeAllOverlays();
        setShowMenu(!showMenu);
    }

    // Open hidden forms
    const profileEdit = () => {
        closeAllOverlays();
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
        <div className='ellipse-menu-container' id='ellipse-menu-container'>
            <div className='ellipse-menu-user-name'>Admin Name</div>
            <i className="fa fa-ellipsis-v ellipse-menu" onClick={menuHandler} aria-hidden="true"></i>
        </div>
        {(showMenu === true) ? (
            <div className='menu-parent-container' id='menu-parent-container'>
            <div className='menu-wrapper'>
                <div className='menu-list'>
                    {/* <div className='menu-list-item'>Dashboard</div>
                    <div className='menu-list-item-divider'></div> */}

                    {/* <div className='menu-list-item'>Start Shift</div>
                    <div className='menu-list-item-divider'></div> */}
                    
                    <div className='menu-list-item item-delete-account' onClick={remove}>Delete Account</div>
                    
                    {/* <div className='menu-list-item-divider'></div> */}
                    {/* <div className='menu-list-item'>Signout</div> */}
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
                        <p><span className="admin-first-word">Name:</span> {adminName}</p>
                    </li>
                    <li>
                        <p><span className="admin-first-word">Email:</span> {adminEmail}</p>
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
            {/* <div className="divider-delete-btn"> */}
                {/* <div id="divider"/> */}
                {/* <div className="admin-change"> */}
                    {/* <h1 id="admin-change-profilei">Delete account</h1> */}
                    {/* <button className="admin-delete-account-btn" onClick={remove}>Delete account</button> */}
                {/* </div> */}
            {/* </div> */}
        </div>

                    
        {/* Hidden delete profile form */}
        <div id={deleteAccount ?"admin-delete-account-overlay-active" : "admin-delete-account-overlay"}>
            <div id={deleteAccount ? "admin-delete-profile-form-active": "admin-delete-profile-form"}>
                <form action="/Employeeprofile/account?option=delete" method="post">
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
                    <form action="/employeeprofile/account?option=details" method="post">
                        <ul>
                            <li id="admin-name"><input type="text" name="employee_name" id="admin-employee-name" value={adminName}/></li>
                            <li id="admin-inputemail"><input type="email" name="employee_email" id="admin-employee-email" value={adminEmail}/></li>
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
                    <form action="/Employeeprofile/account?option=password" method="post">
                        <ul>
                            <li>Old password: <br/><input type="password" name="employee_password[old]" id="admin-old-password" value=""/></li>
                            <li>New password: <br/><input type="password" name="employee_password[new]" id="admin-new-password" value=""/></li>
                            <li>Confirm password: <br/><input type="password" name="employee_password[confirm]" id="admin-confirm-password" value=""/></li>
                            <input type="submit"  id="admin-submit" value="Update"/>
                            <input type="reset"  id="admin-submit" value="cancel" onClick={closeChange}/>
                        </ul>
                    </form>
                </div>
            </div>
        </>
    )
}