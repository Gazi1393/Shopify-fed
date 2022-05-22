import React from "react";

export default function ResponseLoader({data}){
    return(

        <div className="response-interface p-3,mb-2 rounded-1" tabIndex="0">
            <div className="row">
            <div className="col-3">
                <strong>Prompt:</strong>
            </div>
            <div className="col-9"> {data.prompt}</div>
            </div>
            <div className="row mt-1">
            <div className="col-3">
            <strong> Response:</strong>
            </div>
            <div className="col-9">
            {data.response}
            </div>
            </div>
        </div>
        
    );
}