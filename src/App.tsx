import React from 'react';
import Background from './Components/background';
import Kanye from './Components/kanye/kanye';
import SpeechBubble from './Components/speechBubble/speachBubble';
import './App.css';

function App() {
  return (
    <div className="App">
      <Background />
      <Kanye />
      <SpeechBubble />
    </div>
  );
}

export default App;
