import React from "react";

export function APIComponent() {
    return(
        <div className="api-component container">
            <div className="api-inputs px-3">
                <input className="input-url w-75 mb-5" type="url" name="url" placeholder="Shorten a link here..."/>
                <input className="input-url-button mx-3" type="button" name="shorten-url" value="Shorten It!" />
            </div>
        </div>
    );
}

export default APIComponent;