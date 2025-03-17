import React from "react";
import logoChef from "../images/logo-chef.jpg"; 


export default function Header(){
    return(
        <header >    
            <div className="image-container">
            <img className="img" src={logoChef} />
            </div>
            <h1>Chef Claude</h1>
            
      </header>
    )
}