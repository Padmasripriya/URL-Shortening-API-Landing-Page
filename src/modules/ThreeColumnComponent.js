import React from "react";
import BrandRecognitionIcon from "../images/icon-brand-recognition.svg";
import DetailedRecordsIcon from "../images/icon-detailed-records.svg";
import FullyCustomizableIcon from "../images/icon-fully-customizable.svg";

export function ThreeColumnComponent() {
    return(
        <div className="three-column-component gray container">
            <div className="row">
                <div className="col">
                    <div className="first-column">
                        <img src={BrandRecognitionIcon} alt="brand recognition icon" />
                        <h4>Brand Recognition</h4>
                        <p>
                            Boost your brand recognition with each click.
                            Generic links don't mean a thing. Branded links
                            help instil confidence in your content.
                        </p>
                    </div> 
                </div>
                <div className="col">
                    <div className="second-column">
                        <img src={DetailedRecordsIcon} alt="detailed records" />
                        <h4>Detailed Records</h4>
                        <p>
                            Gain insights into who is clicking your likes.
                            Knowing when and where people engage with your content 
                            helps inform better decisions.
                       </p>
                    </div>
                </div>
                <div className="col">
                    <div className="third-column">
                        <img src={FullyCustomizableIcon} alt="fully customizable icon" />
                        <h4>Fully Customizable</h4>
                        <p>
                            Improve brand awareness and content discoverability through 
                            customizable links, supercharging audience engagement.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThreeColumnComponent;