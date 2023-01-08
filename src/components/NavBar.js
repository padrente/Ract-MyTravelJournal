import React from "react";
import logo from "../icons/globe.png";

function NavBar(){
    return(
        <div className="navbar">
            <img src={logo} className="navbar--logo" alt="Globe icon" />
            <p className="navbar--tittle">my travel journal.</p>
        </div>
    )
}

export default NavBar;