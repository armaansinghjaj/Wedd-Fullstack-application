import React from "react";
import VerticalNavbar from "../Admin-components/Sidebar-Background-edit";
import Nametag from "../Common-components/Nametag";
import './Edit-Background-Contact.css';


export default function BackgroundContact() {

    const contact_page='Contact page image file';

    return(
        <>
        <VerticalNavbar/>
            <div className="bgcontact-container">
            <Nametag id1="admin-name-tag" id2="admin-logo-display" id3="admin-name-display" text={"Admin name"} employee={"Admin"}/>
                <div id="edit-services-table-wrapper">
                    <h1>Contact page</h1>
                <table id="contactpage-file-table">
                    {/* <% images.forEach(image => { %> */}
                        <tr>
                            <td>
                                <form action="/background?page=contact" method="POST" enctype="multipart/form-data">
                                    <input type="file" id="file-typ" accept="image/x-png,image/gif,image/jpeg,image/jpg"  name="image"/>
                                    <input type="hidden" name="action" value="for_contact"/>
                                    <input type="submit" id="hit-me"/>
                                </form>
                            </td>
                        </tr>
                    {/* <% }) %>  */}
                </table>
            </div>
        </div>
        </>

    )
}