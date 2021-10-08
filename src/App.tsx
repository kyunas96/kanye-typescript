import React from 'react';
import Background from './Components/background';
import Kanye from './Components/kanye';
import './App.css';

function App() {
  return (
    <div className="App">
      <Background>
        <Kanye/>
      </Background>
    </div>
  );
}

export default App;
