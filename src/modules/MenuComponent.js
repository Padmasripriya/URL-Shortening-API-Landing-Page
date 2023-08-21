import React from 'react';
import * as ReactBootstrap from 'bootstrap';
import CompanyLogo from '../images/logo.svg';

export function MenuComponent() {
    return(
        <>
           <header className="header">
                <div className="container">
                    <div>
                        <img src={CompanyLogo} alt="company logo" />
                        
                        <nav>
                            <ul>
                                <li><button>Features</button></li>
                                <li><button>Pricing</button></li>
                                <li><button>Resources</button></li>
                            </ul>
                        </nav>
                    </div>

                    <ul>
                        <li><button>Login</button></li>
                        <li><button className="cta-button">Sign Up</button></li>
                    </ul>
                </div>
           </header>
        </>
    );
}

export default MenuComponent;