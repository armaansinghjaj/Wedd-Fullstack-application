import React from "react";
import VerticalNavbar from "../Admin-components/Sidebar-Background-edit.css";
import '../../App.css';

export default function BackgroundAbout() {

const imageAboutPage = 'About us image file';

    return(
        <>
        <VerticalNavbar/>
        <div className="bgabout-container">
           
        <table id="homepage">
                <tr>
                    <th>About page</th>
                    <td>{imageAboutPage}</td>
                    <td>
                        <form action="/background?page=about" method="POST" enctype="multipart/form-data">
                            <input type="file" accept="image/x-png,image/gif,image/jpeg,image/jpg" name="image"/>
                            <input type="hidden" name="action" value="for_about"/>
                            <input type="submit" value="Add"/>
                        </form>
                        <form action="/background?page=about" method="POST" enctype="multipart/form-data">
                            <input type="file" accept="image/x-png,image/gif,image/jpeg,image/jpg"  id="browse"  name="image"/>
                            <input type="hidden" name="action" value="for_about"/>
                            <input type="submit" />
                        </form>
                    </td>
                </tr>
        </table> 
    </div>
        </>


    )
}