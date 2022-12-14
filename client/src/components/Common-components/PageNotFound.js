import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css"

export default () => {
    return(
        <>
            <div className="pagenotfound-div">
                <div className="pagenotfound-text-div">
                    <h2 className="pagenotfound-div-head">404</h2>
                    <p className="pagenotfound-div-text pagenotfound-div-text-1">Page not found.</p>
                    <p className="pagenotfound-div-text pagenotfound-div-text-1">Oops! Looks like you are lost.</p>
                    <p className="pagenotfound-div-text pagenotfound-div-text-1">Click <Link replace to={"/"}>here</Link> to go back to home page</p>
                </div>
            </div>
        </>
    )
}