import React, {useState,useEffect} from 'react';
import Quote from './componets/Quote'


function App() {

  const [quote, setQuote] = useState({
    anime: null,
    character: null,
    name: null,
  });

  const fetchQuote = async () => {
    return await fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json());
  }

  const generate = async () => {
      setQuote(await fetchQuote())
  }

  useEffect(() => 
    async function fetchData() {
    setQuote(await fetchQuote());
  },[]);

  return (
    <div className="App" >
     <Quote quote={quote}/>
     <button onClick={generate}>Generate new quote</button>
    </div>
  );
}

export default App;
