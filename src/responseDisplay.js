import React from "react";


export default function ResponseDisplay({data, loaderSkeleton}){
    return (
        <section className="response-wrapper mt-2">
            <h4>Responses:</h4>
            <div className="responses">
                    {
                        loaderSkeleton
                    }
                {data.length>0 ? data.map((r,index)=>(
                    <div className="response-card p-3 mb-2 rounded-1" key={index} tabIndex="0">
                        <div className="row">
                            <div className="col-3">
                                <strong>Prompt:</strong>
                            </div>
                            <div className="col-9">{r.prompt}</div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-3">
                                <strong> Response:</strong>
                            </div>
                            <div className="col-9">
                                {r.response.map((r,i)=>(
                                    <div key={i}>{r}</div>
                                ))}
                        </div>
                        </div>

                    </div>
                    ))
                    :"No responses yet"}

                
                    </div>

                    <div className="col-3">
                        <h1> Some prompts to choose from:</h1>
                        <li>"Write a poem about Canadian Geese in the winter"</li>            
                        <li>"Write a poem about a ship lost at sea" </li>
                        <li>"Write a food-court review based on: atmosphere, music, tortilla chips"</li>

                        <h6>Write your own prompts and get awesome responses</h6>


                                    
                        


                    </div>
                    </section>
    );
 }
                
    
