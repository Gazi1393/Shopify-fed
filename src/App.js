
import './App.css';
import Prompt from './Prompt.js';
import ResponseLoader from './responseloader.js';
import ResponseDisplay from './responseDisplay.js';
import CompleteFetch from './fetcher';
import { useState } from 'react';

function App() {
  const [responseData, setResponseData] = useState([]);
  const [pendingFetch,setPendingFetch] = useState(null);
  const [loading,setLoading] = useState(false);
  const [message, setMessage]= useState(null);

  const onFormSubmit=(userText)=>{

    let found_data = responseData.find((r)=> r.prompt === userText);
    let newmsg= "";

    if(userText===""){
      newmsg="Enter a statement here";
    }else 
    if(found_data){
      newmsg="Maybe try with something other than that..?"
    }else {
      updateResponses(userText);
    }

    setMessage(newmsg)
    return !found_data;
  };

  const updateResponses= async (newPrompt)=>{
    if(loading){
      return setLoading(true);
    } 
    const newResponse ={
      prompt: newPrompt,
      response:"Fetching response..."
    };

    setPendingFetch(newResponse)
    const completion= await CompleteFetch(newPrompt);

    newResponse.response=completion.choices.map((c)=> c.text);


    setPendingFetch(null);
    setResponseData((prevResponses)=>[newResponse,...prevResponses]);
    setLoading(false);
    }
  return (
    <div className="App">
      <header className="App-header">
        
        <h1> Fun with AI</h1>

        <h3> GPT-3 is a powerful AI Model created by OpenAI. </h3>
        <h4> It can process plain text prompts and generate interesting outputs</h4>
        
               
      </header>
      <main className='mt-3'>
        <Prompt onSubmit={onFormSubmit} loading={loading} info={message}/>
        <ResponseDisplay data={responseData}
              loaderSkeleton= { pendingFetch ?
                <ResponseLoader data ={pendingFetch}/>
                :false
              }

          />      
      </main>
    </div>
  );
}

export default App;
