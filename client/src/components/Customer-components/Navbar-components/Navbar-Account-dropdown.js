import React from "react";
import {Link} from "react-router-dom";
import "./Navbar-Account-dropdown.css";

export default function NavbarAccountdropdown() {

    return (
        <>
            <div className="dropdown-box">
                <ul className="dropdown-list">
                        <li className="dropdown-list-item"><Link to='/account'>Account</Link></li>
                        <li className="dropdown-list-item"><Link to='/helpandsupport'>Support</Link></li>
                        <li className="dropdown-list-item"><Link to='/logout' >Sign Out</Link></li>
                </ul>
            </div>
        </>
    );
}