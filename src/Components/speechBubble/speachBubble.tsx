import React from 'react';
import './speechBubble.css';
import Bubble from './bubble.svg';


const SpeechBubble = ({quote} : {quote: string}) => (
  <div className="speech-bubble">
    <img src={Bubble} alt=""></img>
    <div>{quote}</div>
  </div>
)

export default SpeechBubble;