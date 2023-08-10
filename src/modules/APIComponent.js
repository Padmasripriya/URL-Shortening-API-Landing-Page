import React from "react";

export function APIComponent() {
    return(
        <div className="api-component">
            <input type="url" name="url" />
            <input type="button" name="shorten-url" value="Shorten It!" />
        </div>
    );
}

export default APIComponent;