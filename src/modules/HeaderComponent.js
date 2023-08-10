import React from "react";
import HeaderImage from "../images/illustration-working.svg";

export function HeaderComponent() {
    return(
        <div className="header-component container">
            <div className="header-image mb-5">
                <img src={ HeaderImage } alt="header image" />
            </div>
            <div className="header-content">
                <h1>More than just shorter links</h1>
                <p>
                    Build your brand's recognition and get detailed insights on 
                    how ypur links are performing.
                </p>
            </div>  
            <div className="header-button mb-5">
                <p><a href="#">Get Started</a></p>
            </div>
        </div>
    );
}

export default HeaderComponent;