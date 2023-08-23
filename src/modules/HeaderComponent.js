import React from "react";
import HeaderImage from "../images/illustration-working.svg";

export function HeaderComponent() {
    return(
        <div className="header-component">
            <div class="container">
                <div className="header-flex-desktop d-lg-flex align-items-lg-center d-none">
                    <div className="header-content">
                        <h1>More than just shorter links</h1>
                        <p className="pb-3">
                            Build your brand's recognition and get detailed insights on 
                            how ypur links are performing.
                        </p>
                        <p className="header-button mb-5">
                            <a href="#">Get Started</a>
                        </p>
                    </div> 
                    <div className="header-image mb-5">
                        <img src={ HeaderImage } alt="header image" />
                    </div> 
                </div>
            </div>
            

            <div class="header-block-mobile d-lg-none">
                <div class="container">
                    <div className="header-image mb-5 mt-4">
                        <img src={ HeaderImage } alt="header image" />
                    </div>
                    <div className="header-content text-center ">
                        <h1>More than just shorter links</h1>
                        <p>
                            Build your brand's recognition and get detailed insights on 
                            how ypur links are performing.
                        </p>
                        <p className="header-button mb-5">
                            <a href="#">Get Started</a>
                        </p>
                    </div>  
                </div>
            </div> 
        </div>
    );
}

export default HeaderComponent;