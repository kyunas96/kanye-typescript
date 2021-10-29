import React from 'react';
import './speechBubble.css';
import Bubble from './Untitled.svg';


const SpeechBubble = () => (
  <div className="speech-bubble">
      {/* speech bubble background*/}
      <img src={Bubble}></img>
      <div>I'm gunna save this place.</div>
  </div>
)

export default SpeechBubble;