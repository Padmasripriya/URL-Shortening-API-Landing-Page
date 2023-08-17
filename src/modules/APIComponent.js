import React from "react";

export function APIComponent() {
    return(
        <div className="api-component container">
            <input className="input-url mb-5" type="url" name="url" placeholder="Shorten a link here..."/>
            <input className="input-url-button" type="button" name="shorten-url" value="Shorten It!" />
        </div>
    );
}

export default APIComponent;