import React, { useState, useEffect } from 'react';
import './speechBubble.css';
import Bubble from './bubble.svg';


const SpeechBubble = ({ curWord }: { curWord: string }) => {
  const [quote, setQuote] = useState<string[]|[]>([]);

  useEffect(() => {
    setQuote([...quote, curWord])
  }, [curWord])

  return (
    <div className="speech-bubble">
      <img src={Bubble} alt=""></img>
      <div>{quote.join(" ")}</div>
    </div>
  )
}

export default SpeechBubble;