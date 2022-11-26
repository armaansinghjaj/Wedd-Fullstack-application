import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import Cookies from 'universal-cookie';
import "./Navbar-Account-dropdown.css";

export default function NavbarAccountdropdown() {

    return (
        <>
            <div className="dropdown-box">
                <ul className="dropdown-list">
                        <li className="dropdown-list-item"><Link to='/account'>Account</Link></li>
                        <li className="dropdown-list-item"><Link to='/helpandsupport'>Support</Link></li>
                        <li className="dropdown-list-item"><Link to='/logout'>Sign Out</Link></li>
                </ul>
            </div>
        </>
    );
}