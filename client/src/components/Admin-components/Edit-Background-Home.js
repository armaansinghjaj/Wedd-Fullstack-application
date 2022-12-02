import React, {useState} from "react";
import { Link } from "react-router-dom";
import VerticalNavbar from "../Admin-components/Sidebar-Background-edit";
import Nametag from "../Common-components/Nametag";
import './Edit-Background-Home.css';


export default function BackgroundHome() {

    return(
        <>
        <VerticalNavbar/>
        <div className="bghome-container">
        <Nametag id1="admin-name-tag" id2="admin-logo-display" id3="admin-name-display" text={"Admin name"} employee={"Admin"}/>
            <div id="edit-homepage-table-wrapper">
                <h1>Home page</h1>
                <table id="edit-homepage-table">
                    {/* <% images.forEach(image => { %> */}
                        <tr>
                            <td>
                                <form action="/background?page=home" method="POST" enctype="multipart/form-data">
                                    <input id="file-typ" type="file" accept="image/x-png,image/gif,image/jpeg,image/jpg" name="image"/>
                                    <input type="hidden" name="action" value="Home Page"/>
                                    <input id="add-me" type="submit" value="Add"/>
                                </form>
                                {/* <button onClick={setPreview}>Preview</button> */}
                            </td>
                            <td>
                                <form action="/background?page=home" method="POST" enctype="multipart/form-data">
                                    <input type="file" accept="image/x-png,image/gif,image/jpeg,image/jpg"  id="browse" name="image"/>
                                    <input type="hidden" name="action" value="for_home"/>
                                    <br />
                                    <input id="hit-me" type="submit" />
                                </form>
                            </td>
                        </tr>
                    {/* <% }) %> */}
                </table>
            </div>
        </div>
        </>
        
    )
}