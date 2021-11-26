import React, { useState, useEffect } from 'react';
import Background from './Components/background';
import Kanye from './Components/kanye/kanye';
import SpeechBubble from './Components/speechBubble/speachBubble';
import './App.css';
import Button from './Components/button';

const interruptQuote = `Yo I’ll let you finish, but what the hell you
doin while Yeezy speaks`;

function App() {
  const [quote, setQuote] = useState<string>("I'm gunna save this place");

  useEffect(() => {
    fetch("https://api.kanye.rest")
      .then(res => res.json())
      .then(({quote}) => setQuote(quote))
  }, [])

  return (
    <div className="App">
      <Background />
      <Kanye />
      {/* pass quote from state as prop*/}
      <SpeechBubble quote={quote}/>
      {/* pass fetch function to button */}
      <Button />
    </div>
  );
}

export default App;
