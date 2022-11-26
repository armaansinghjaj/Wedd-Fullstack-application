import React from "react";
import ContactRequestTable from '../components/Admin-components/Service-Requests';
import AdminNavbar from "../components/Admin-components/Admin-bar";

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