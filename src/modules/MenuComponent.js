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
                        <img src={CompanyLogo} alt="company logo" />
                        
                        {/* When isOpen is true then the navbar is displayed */}
                        {isOpen && (
                            <div className="sub-menu">
                                <nav>
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
                        <button onClick= {() => setIsOpen(!isOpen)} className="text-uppercase border-0 bg-transparent">Menu</button>
                    </div>
                </div>
           </header>
        </>
    );
}

export default MenuComponent;