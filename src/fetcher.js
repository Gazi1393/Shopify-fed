
const API_URL= "https://api.openai.com/v1/engines/text-curie-001/completions";
const OPENAI_SECRET= ""

export default async function CompleteFetch(text){
    const data = {
        prompt: text,
        temperature: 0.1,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    };


    const res = await fetch(API_URL, {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_SECRET}`,
            },
            body: JSON.stringify(data),
    });

    return await res.json();
}