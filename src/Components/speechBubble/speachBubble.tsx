import React, { useState, useEffect } from 'react';
import './speechBubble.css';
import Bubble from './bubble.svg';


const SpeechBubble = ({ quoteArray }: { quoteArray: string[] }) => {
  return (
    <div className="speech-bubble">
      <img src={Bubble} alt=""></img>
      <div>{quoteArray.join(" ")}</div>
    </div>
  )
}

export default SpeechBubble;