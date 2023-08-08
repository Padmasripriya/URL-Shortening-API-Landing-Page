import React from "react";

export function FooterComponent() {
    return(
        <div className="footer-component">
            <div className="row">
                <div className="col">
                    <div className="footer-logo">
                        <img src="" alt="" />
                    </div>
                    <div className="company-features">
                        <p>Features</p>
                        <ul>
                            <li>Link Shortening</li>
                            <li>Branded Links</li>
                            <li>Analytics</li>
                        </ul>
                    </div>
                    <div className="company-resources">
                        <ul>
                            <li>Blog</li>
                            <li>Developers</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div className="company-details">
                        <ul>
                            <li>About</li>
                            <li>Our Team</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div class="social-links">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterComponent;