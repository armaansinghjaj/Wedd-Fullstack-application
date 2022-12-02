import React, {useState} from "react";
import { Link } from "react-router-dom";
import VerticalNavbar from "../Admin-components/Sidebar-Background-edit";
import './Edit-Background-Home.css';


export default function BackgroundHome() {

    let imagePath = '"../../images/25100.jpg"';
    const [image, setImage] = useState(null);

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          setImage(e.target.files[0]);
          console.log(image)
        }
      };
    

    return(
        <>
        {/* <VerticalNavbar/> */}
        <div className="bghome-container">
            <div>
                <table id="edit-homepage-table">
                    {/* <% images.forEach(image => { %> */}
                        <tr>
                            <th>Home page</th>
                            <td>
                                <form action="/background?page=home" method="POST" enctype="multipart/form-data">
                                    <input id="file-typ" type="file" accept="image/x-png,image/gif,image/jpeg,image/jpg" name="image" onChange={imageChange}/>
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
                            <td>
                                <p>Preview:
                                    <div>
                                        <img src={require(imagePath)} alt='Home background' width="640" height="360"/>
                                    </div>
                                </p>
                            </td>
                        </tr>
                    {/* <% }) %> */}
                </table>
            </div>
        </div>
        </>
        
    )
}