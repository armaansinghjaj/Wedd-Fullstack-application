import React, {useEffect, useState} from "react";
import { Navigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import ProfilePage from '../Customer-components/Profilepage-components/ProfilePage'
import '../Customer-components/Profilepage-components/AccountPages.css';
import '../Common-components/Settings-privacy.css';
import Loader from '../Common-components/Loader';
import Auth from "./Auth";

export default function Settings() {

    const cookies = new Cookies();

    const [profileName, setprofileName]=useState('');
    const [profileEmail, setprofileEmail]=useState('');
    const [profileOldPassword, setprofileOldPassword]=useState('');
    const [profileNewPassword, setprofileNewPassword]=useState('');
    const [profileNewPassword_confirm, setprofileNewPassword_confirm]=useState('');
    const [customerDetails, setCustomerDetails] = useState([]);

    const [editProfile, setEditProfile] = useState(false);
    const [changePassword, setChangePassword] = useState(false);
    const [deleteAccount, setDeleteAccount] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const [accountDeleted, setAccountDeleted] = useState(false);
    const [loader, setLoader] = useState(false);

    // Functions
    const closeAllOverlays = () =>{
        setShowMenu(false);
        setEditProfile(false);
        setChangePassword(false);
        setDeleteAccount(false);
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

    useEffect( () => {
        fetchCustomerDetails();
    }, []);

    const fetchCustomerDetails = async () => {

        fetch(`/api/account/profile/${cookies.get('__sid')}`, {
            credentials: 'same-origin',
            mode: 'cors',
            method: 'GET'
        })
        .then(profile_response => profile_response.json())
        .then(profile_responseData => {
            setCustomerDetails(profile_responseData);
        })
    };

    // Handle value changes
    const handleProfileDetailsNameChange=(e)=>{
        setprofileName(e.target.value);
    }
    const handleProfileDetailsEmailChange=(e)=>{
        setprofileEmail(e.target.value);
    }

    const handleProfileOldPassword=(e)=>{
        setprofileOldPassword(e.target.value);
    }
    const handleprofileNewPassword=(e)=>{
        setprofileNewPassword(e.target.value);
    }
    const handleprofileNewPassword_confirm=(e)=>{
        setprofileNewPassword_confirm(e.target.value);
    }

    // Handle details form submit
    const handleDetailsForm = () => {
        if(profileName === "" || profileEmail === ""){
            
            // SHOW ERROR HERE
            alert("Empty");

        } else{
            const details_data = {
                customer_email: profileEmail,
                customer_name: profileName
            }
            fetch(`/api/account/profile/${cookies.get('__sid')}?option=details`, {
                credentials: 'same-origin',
                mode: 'cors',
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(details_data),
            })
            .then(profile_details_response => profile_details_response.json())
            .then(profile_details_response => {
                alert(profile_details_response);
            })
        }
    }

    const handlePasswordForm = () => {
        setLoader(true);
        if(profileOldPassword === "" || profileNewPassword === "" || profileNewPassword_confirm === ""){
            
            // SHOW ERROR HERE
            alert("Empty");

        } else{
            const password_data = {
                profile_password_old: profileOldPassword,
                profile_password_new: profileNewPassword,
                profile_password_confirm: profileNewPassword_confirm,
            }
            fetch(`/api/account/profile/${cookies.get('__sid')}?option=password`, {
                credentials: 'same-origin',
                mode: 'cors',
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(password_data),
            })
            .then(profile_password_response => profile_password_response.json())
            .then(profile_password_response => {
                alert(profile_password_response);
                setLoader(false);
            })
            .catch((err)=>{
                alert(err)
            })
        }
    }

    const handleDeleteForm = () => {
        fetch(`/api/account/profile/${cookies.get('__sid')}`, {
            credentials: 'same-origin',
            mode: 'cors',
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(profile_delete_response => profile_delete_response.json())
        .then(profile_delete_response => {
            console.log(profile_delete_response);
            if(profile_delete_response.delete){
                cookies.remove('c_user');
                cookies.remove('__sid');
                setAccountDeleted(true);
            }
        })
    }

    const [visibleConfirm, setVisibleConfirm] = useState(false) 
    const displayConfirm = visibleConfirm ? "confirmation-visible" : "confirmation";

    const displayButton = () => {
        setVisibleConfirm(!visibleConfirm);
    }

    return(
        <>
<Auth/>
        {/* Loader component */}
        {loader && <Loader/>}

        {(accountDeleted === true) && <Navigate to="/login" replace={true}/>}

        <div className="driver-settings-display">
            <h1 id="profile-settings-h1">
                Profile Settings
            </h1>
            <div className="driver-general-settings">
            <p className="driver-profile-heading-general" id="general-settings-header">General Settings</p>
                <ul id="drivers-edit-profile-ul">
                    <li>
                        <p><span className="driver-first-word">Name:</span> {customerDetails.name}</p>
                    </li>
                    <li>
                        <p><span className="driver-first-word">Email:</span> {customerDetails.email}</p>
                    </li>
                </ul>
                <button className="driver-edit-button" onClick={profileEdit}>
                        Edit details
                </button>
            </div>
            <div id="divider"/>
            <div className="driver-password-change">
                <p className="driver-profile-heading-general">Change password</p>
                <ul>
                    <li>
                        <button className="driver-edit-button" onClick={passwordChange}>Change Password</button>
                    </li>
                </ul>
            </div>
            <div className="customer-divider-delete-btn">
                <div className="driver-change">
                    <h1 id="driver-change-profilei">Delete account</h1>
                    <div id="divider"/>
                    <button className="driver-delete-account-btn" onClick={remove}>Delete account</button>
                </div>
            </div>
        </div>

                    
        {/* Hidden delete profile form */}
        <div id={deleteAccount ?"driver-delete-account-overlay-active" : "driver-delete-account-overlay"}>
            <div id={deleteAccount ? "drivers-delete-profile-form-active": "drivers-delete-profile-form"}>
                <form onSubmit={handleDeleteForm}>
                    <div className={"delete-confirmation1"}>
                        <h1 id="delete-warning1">WARNING!</h1>
                        <p>Once you delete your account, there is no going back. Please be certain.</p>
                        <input type="submit" id="driver-submit-confirm1" value="Confirm"/> <input type="reset"  id="driver-submit-cancel1"
                         className="delete_account_btn1" value="Cancel" onClick={closeRemove}/>
                    </div>
                </form>
            </div>
        </div>
        

        {/* Hidden drivers name edit form */}
            <div id={editProfile ?"driver-delete-account-overlay-active" : "driver-delete-account-overlay"}>
                <div id={editProfile ? "driver-edit-form-active" :"driver-edit-form"}>
                    <h1 id="driver-change-profile1">Edit profile</h1>
                    <form onSubmit={handleDetailsForm}>
                        <ul>
                        <li id="driver-inputemail"><input type="email" name="employee_email" id="driver-employee-email" onChange={handleProfileDetailsEmailChange} placeholder="Your email" value={profileEmail}/></li>
                            <li id="driver-name"><input type="text" name="employee_name" id="driver-employee-name" onChange={handleProfileDetailsNameChange} placeholder="You name" value={profileName}/></li>
                            <div className="driver-edit-profile-btns1">
                                <input type="submit" className="driver-submit" value="Update"/>
                                <input type="reset" className="driver-submit" value="Cancel" onClick={closeEdit}/>
                            </div>
                        </ul>
                    </form>
                </div>
            </div>

            {/* Hidden drivers password change form */}
            <div id={changePassword ?"driver-delete-account-overlay-active" : "driver-delete-account-overlay"}>
                <div className={changePassword ? "driver-password-form-active" : "driver-password-form"}>
                    <h1 id="driver-change-profilec1">Change password</h1>
                    <form onSubmit={handlePasswordForm}>
                        <ul>
                            <li>Old password: <br/><input type="password" name="employee_password[old]" id="driver-old-password" onChange={handleProfileOldPassword} value={profileOldPassword}/></li>
                            <li>New password: <br/><input type="password" name="employee_password[new]" id="driver-new-password" onChange={handleprofileNewPassword} value={profileNewPassword}/></li>
                            <li>Confirm password: <br/><input type="password" name="employee_password[confirm]" id="driver-confirm-password" onChange={handleprofileNewPassword_confirm} value={profileNewPassword_confirm}/></li>
                            <input type="submit"  className="driver-submit" value="Update"/>
                            <input type="reset"  className="driver-submit" value="cancel" onClick={closeChange}/>
                        </ul>
                    </form>
                </div>
            </div>
        </>
    )
}