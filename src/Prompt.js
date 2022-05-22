import React, {useState} from "react";

export default function Prompt( {data, onSubmit, loading, info }) {

    const [promptVal, setPrompt] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const handled= onSubmit(promptVal);

        if(handled){
            setPrompt("");
        }
    };
    return(
        <form id="prompt" className="row" onSubmit={handleFormSubmit}>
            <div className="col-md-12">
                <label htmlFor="prompt">
                    <strong> Enter Prompt Below:</strong>
                    <h4>You may want to check out some example presets at the bottom of the page to help you get started! </h4>
                </label>
                </div>
                <div>
                <textarea name="prompttext" value={promptVal}
                    onChange={e=> setPrompt(e.target.value)}
                    className="form-control mb-3 mt-1" rows={2} data-gram="false"
                    />                    
            </div>
            <div className="col-md-12 d-flex justify-content-end">
                {
                    info &&
                    <div className="alert alert-warning m-0 mx-3 p-1" role="alert">
                        {info}
                        </div>
                }
                <button className="btn btn-primary" disabled={loading} type="submit">
                    {loading?"loading.....":"Submit"}
                </button>
            </div>
        </form>
    );
}