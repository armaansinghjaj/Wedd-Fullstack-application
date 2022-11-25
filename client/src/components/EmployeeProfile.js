import React from "react";
import '../components/Profile.css';

export default function EmployeeProfile() {

    return(
        <>
        <div className="profile-container">
            <h1 id="change-profile">Change profile</h1>
           
            <form action="/employeeprofile/account?option=details" method="post">
                <ul>
                    <li id="input">Your name: <input type="text" name="employee_name" id="employee_name" value="<%= employee_account.name %>"/></li>
                    <li id="inputemail">Your email: <input type="email" name="employee_email" id="employee_email" value="<%= employee_account.email %>"/></li>
                    <input type="submit"  id="submit" value="Update account"/>
                </ul>
            </form>
            
           
            <h1 id="change-profilec">Change password</h1>
            <div className="change">
            <form action="/Employeeprofile/account?option=password" method="post">
                <ul>
                    <li>Old password: <input type="password" name="employee_password[old]" id="old_password" value=""/></li>
                    <li>New password: <input type="password" name="employee_password[new]" id="new_password_field" value=""/></li>
                    <li>Confirm password: <input type="password" name="employee_password[confirm]" id="confirm_password" value=""/></li>
                    <input type="submit"  id="submit" value="Update password"/>
                </ul>
            </form>
            </div>
            <h1 id="change-profilei">Delete account</h1>
            
            <div className="change">
            <button className="delete_account_btn"  id="submit" >Delete account</button>
            <form action="/Employeeprofile/account?option=delete" method="post">
                <div className="delete_confirmation">
                    <p>Once you delete your account, there is no going back. Please be certain.</p>
                    <input type="submit" id="submit" value="Confirm"/> <input type="reset"  id="submit" className="delete_account_btn" value="Cancel"/>
                </div>
            </form>
            </div>
            </div>
        </>
    )
}