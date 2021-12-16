import React, { useState, useEffect } from 'react';
import './speechBubble.css';
import Bubble from './bubble.svg';


const SpeechBubble = ({ quote }: { quote: string }) => {
  return (
    <div className="speech-bubble">
      <img src={Bubble} alt=""></img>
      <div>{quote}</div>
    </div>
  )
}

export default SpeechBubble;