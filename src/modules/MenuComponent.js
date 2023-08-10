import React from 'react';
import * as ReactBootstrap from 'bootstrap';
import CompanyLogo from '../images/logo.svg';

export function MenuComponent() {
    return(
        <div className="container">
            <nav className="navbar navbar-expand-lg">
            <img src={CompanyLogo} alt="company logo"/>
            <button 
               className="navbar-toggler" 
               type="button" 
               data-toggle="collapse" 
               data-target="#navbarSupportedContent" 
               aria-controls="navbarSupportedContent" 
               aria-expanded="false" 
               aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Resources</a>
                    </li>
                </ul>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sign Up</a>
                    </li>
                </ul>
            </div>
        </nav> 
        </div>
        
    );
}

export default MenuComponent;