import React from "react";
import { useState } from "react";

export function APIComponent() {
    const [link, setLink] = useState(false);
    function checkInput() {
        if(link.length == 0){
            setLink(true);
        }
    }
    return(
        <div className="api-component container">
            <div className="api-inputs px-3">
                <input className="input-url w-75 mb-5" type="url" name="url" placeholder="Shorten a link here..."/>
                { link ? <span className="border-red">Please add a link</span> : "" }
                <input className="input-url-button mx-3" type="button" name="shorten-url" value="Shorten It!" onClick={checkInput()}/>
            </div>
        </div>
    );
}

export default APIComponent;