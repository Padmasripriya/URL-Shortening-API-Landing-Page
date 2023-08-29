import React from 'react';
import { useState } from 'react';
import * as ReactBootstrap from 'bootstrap';
import CompanyLogo from '../images/logo.svg';

export function MenuComponent() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
           <header className="menu-component pt-5">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between position-relative">
                        <div className="d-lg-flex align-items-center">
                            <img src={CompanyLogo} alt="company logo" />
                            {/* Desktop Navigation */}
                            <div className="sub-menu-desktop d-lg-block d-none">
                                <nav>
                                    <ul className="d-flex align-items-center justify-content-center mx-3">
                                        <li><button className="sub-menu-links border-0 bg-transparent px-3 pt-3">Features</button></li>
                                        <li><button className="sub-menu-links border-0 bg-transparent px-3 pt-3">Pricing</button></li>
                                        <li><button className="sub-menu-links border-0 bg-transparent px-3 pt-3">Resources</button></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <ul class="d-lg-flex d-none">
                                <li><button className="sub-menu-links-desktop border-0 bg-transparent mb-4 px-4 pt-3">Login</button></li>
                                <li><button className="cta-button mt-2">Sign Up</button></li>
                        </ul>
                         
                        {/* When isOpen is true then the navbar is displayed */}
                        {isOpen && (
                            <div className="sub-menu-mobile">
                                <nav className="d-lg-none">
                                    <ul>
                                        <li><button className="sub-menu-links border-0 bg-transparent">Features</button></li>
                                        <li><button className="sub-menu-links border-0 bg-transparent">Pricing</button></li>
                                        <li><button className="sub-menu-links border-0 bg-transparent">Resources</button></li>
                                    </ul>
                                </nav>
                                <div className="hor-line"></div>
                                <ul>
                                    <li><button className="sub-menu-links border-0 bg-transparent mb-4">Login</button></li>
                                    <li><button className="cta-button">Sign Up</button></li>
                                </ul>
                            </div>
                        )}
                        <button 
                            onClick= {() => setIsOpen(!isOpen)} 
                            className="text-uppercase border-0 bg-transparent d-lg-none">
                            {isOpen ? "Close" : "Menu"}
                        </button>
                        
                    </div>
                </div>
           </header>
        </>
    );
}

export default MenuComponent;