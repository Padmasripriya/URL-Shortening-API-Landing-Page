import React from "react";
import { useState } from "react";

export function APIComponent() {
    const [text, setText] = useState('');
    const [textError, setTextError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.length == 0) {
            setTextError(true);
        }
        else {
            //check for the valid link
            
        }
    }
    
    return(
        <form className="form" onSubmit={handleSubmit}>
            <div className="api-component container pt-5 pb-5">
                <div className="api-inputs px-3 mt-3">
                    {textError ? <input onChange={(e) => setText(e.target.value)} className="input-url w-75" type="url" name="url" placeholder="Shorten a link here..." style={{border: '1px solid red'}}/> : <input onChange={(e) => setText(e.target.value)} className="input-url w-75 mb-5" type="url" name="url" placeholder="Shorten a link here..."/>}
                    <input className="input-url-button mx-3" type="button" name="shorten-url" value="Shorten It!" onClick={handleSubmit}/>
                    {textError ? <span className="" style= {{color: "hsl(0, 87%, 67%)", fontSize: 12}}><br></br>Please check the input</span> : ""}
                </div>
        </div>
        </form>
    );
}

export default APIComponent;