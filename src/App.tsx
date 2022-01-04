import React, { useState} from 'react';
import Background from './Components/background';
import Kanye from './Components/kanye/kanye';
import './App.css';

const interruptQuote = `Yo I’ll let you finish, but what the hell you
doin while Yeezy speaks`;

function App() {
  const [fullQuote, setFullQuote] =
    useState<string>("I'm gunna save this place");

  return (
    <div className="App">
      <Background />
      <Kanye quote={fullQuote} />
      {/* <Button /> */}
    </div>
  );
}

export default App;
