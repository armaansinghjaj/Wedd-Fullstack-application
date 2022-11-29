import React from "react";
import VerticalNavbar from "../Admin-components/Sidebar-Background-edit";
import '../../App.css';


export default function BackgroundHome() {

    const home_page_image='Home page image file';

    return(
        <>
        <VerticalNavbar/>
        <div className="bghome-container">
            
            <table id="homepage">
                {/* <% images.forEach(image => { %> */}
                    <tr>
                        <th>Home page</th>
                        <td>{home_page_image}</td>
                        
                        {/* Value inside input breaks code. No idea why*/}

                        <td>
                            <form action="/background?page=home" method="POST" enctype="multipart/form-data">
                                <input id="file-typ" type="file" accept="image/x-png,image/gif,image/jpeg,image/jpg" name="image"/>
                                <input type="hidden" name="action" value="Home Page"/>
                                <input id="add-me" type="submit" value="Add"/>
                            </form>
                        </td>
                        <br />
                        <br />
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
        </>
        
    )
}