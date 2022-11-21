import React from "react";
import VerticalNavbar from "../components/VerticalNavbar";
import '../App.css';


export default function BackgroundContact() {

    const contact_page='Contact page image file';

    return(
        <>
        <VerticalNavbar/>
            <div className="bgcontact-container">
            
                <table id="homepage">
                    {/* <% images.forEach(image => { %> */}
                        <tr>
                            <th>Contact page</th>
                            <td>{contact_page}</td>
                            <td>
                                <form action="/background?page=contact" method="POST" enctype="multipart/form-data">
                                    <input type="file" accept="image/x-png,image/gif,image/jpeg,image/jpg" name="image"/>
                                    <input type="hidden" name="action" value="for_contact"/>
                                    <input type="submit" value="Add"/>
                                </form>
                                <form action="/background?page=contact" method="POST" enctype="multipart/form-data">
                                    <input type="file" accept="image/x-png,image/gif,image/jpeg,image/jpg"  id="browse" name="image"/>
                                    <input type="hidden" name="action" value="for_contact"/>
                                    <input type="submit" />
                                </form>
                            </td>
                        </tr>
                    {/* <% }) %>  */}
                </table>
        </div>
        </>

    )
}