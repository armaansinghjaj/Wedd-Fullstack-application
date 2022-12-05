import React from "react";
import VerticalNavbar from "../Admin-components/Sidebar-Background-edit";
import Nametag from "../Common-components/Nametag";
import './Edit-Background-About.css';

export default function BackgroundAbout() {

const imageAboutPage = 'About us image file';

    return(
        <>
        <VerticalNavbar/>
            <div className="bgabout-container">
            <Nametag id1="admin-name-tag" id2="admin-logo-display" id3="admin-name-display" text={"Admin name"} employee={"Admin"}/>
            <div id="edit-about-table-wrapper">    
                    <h1>About Page</h1>       
                    <table id="edit-about-table">
                            <tr>
                                <td>
                                    <form action="/background?page=about" method="POST" enctype="multipart/form-data">
                                        <input type="file" id="file-typ" accept="image/x-png,image/gif,image/jpeg,image/jpg"   name="image"/>
                                        <input type="hidden" name="action" value="for_about"/>
                                        <input type="submit" id="add-me"/>
                                    </form>
                                </td>
                            </tr>
                    </table> 
                </div>
            </div>
        </>


    )
}