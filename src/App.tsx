import React, { useState } from 'react';
import Background from './Components/background';
import Kanye from './Components/kanye/kanye';
import SpeechBubble from './Components/speechBubble/speachBubble';
import './App.css';
import Button from './Components/button';

const interruptQuote = `Yo I’ll let you finish, but what the hell you
doin while Yeezy speaks`;

function App() {
  const [quote, setQuote] = useState<string>("I'm gunna save this place");

  const fetchQuote = () => {
    
  }

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
