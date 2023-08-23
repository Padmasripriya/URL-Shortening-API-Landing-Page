import React from "react";
import BrandRecognitionIcon from "../images/icon-brand-recognition.svg";
import DetailedRecordsIcon from "../images/icon-detailed-records.svg";
import FullyCustomizableIcon from "../images/icon-fully-customizable.svg";

export function ThreeColumnComponent() {
    return(
        <div className="three-column-component gray pt-5 pb-5 pb-lg-5">
            <div className="container">
                <div className="row position-relative">
                    <div className="line"></div>
                    <div className="col-12 col-lg-4 position-relative">
                        <div className="first-column rounded-2">
                            <img className="p-3 bg-purple rounded-5" src={BrandRecognitionIcon} alt="brand recognition icon" />
                            <h4 className="pt-4 pb-3">Brand Recognition</h4>
                            <p>
                                Boost your brand recognition with each click.
                                Generic links don't mean a thing. Branded links
                                help instil confidence in your content.
                            </p>
                        </div> 
                    </div>
                    <div className="col-12 col-lg-4 position-relative">
                        <div className="second-column rounded-2">
                            <img className="p-3 bg-purple rounded-5"src={DetailedRecordsIcon} alt="detailed records" />
                            <h4 className="pt-4 pb-3">Detailed Records</h4>
                            <p>
                                Gain insights into who is clicking your likes.
                                Knowing when and where people engage with your content 
                                helps inform better decisions.
                        </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 position-relative">
                        <div className="third-column rounded-2">
                            <img className="p-3 bg-purple rounded-5" src={FullyCustomizableIcon} alt="fully customizable icon" />
                            <h4 className="pt-4 pb-3">Fully Customizable</h4>
                            <p>
                                Improve brand awareness and content discoverability through 
                                customizable links, supercharging audience engagement.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThreeColumnComponent;