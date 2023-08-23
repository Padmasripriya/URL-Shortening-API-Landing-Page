import React from "react";
import bgDesktop from "../images/bg-boost-desktop.svg";
import bgMobile from "../images/bg-boost-mobile.svg";

export function CTAComponent() {
    return(
        <>
            <div className="cta-component position-relative">
                <picture>
                    <img className="desktop d-lg-block d-none w-100" src={bgDesktop} alt="boost desktop background image" />
                    <img className="mobile d-lg-none w-100" src={bgMobile} alt="boost mobile background image" />
                </picture>
                <div className="cta-component-content text-center text-white">
                    <h3 className="mb-4">Boost your links today</h3>
                    <p><a href="" className="cta-button">Get Started</a></p>
                </div>
            </div>  
        </>
        
    );
}

export default CTAComponent;