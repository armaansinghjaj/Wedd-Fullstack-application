import React from "react";
import ContactRequestTable from '../components/Contact-Requests';
import AdminNavbar from "../components/AdminNavbar";

export default function ContactRequests() {
    return(
        <>
            <div>
                <AdminNavbar/>
                <ContactRequestTable/>
            </div>
        </>
    )
}