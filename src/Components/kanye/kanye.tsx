import React, {useState, useEffect} from "react";
import Mouth from "../mouth/mouth";
import SpeechBubble from "../speechBubble/speachBubble";
import KanyeFace from "./kanye.png";
import "./kanye.css";

const Kanye = ({ quote }: { quote: string }) => {
  const [partialQuote, setPartialQuote] = useState<string>(quote);
  const [curIndex, setCurIndex] = useState<number>(0);

  useEffect(function(){
    console.log("partialQuote: " + partialQuote);
    console.log("curIndex: " + curIndex);
  }, [])

  // 
  useEffect(function(){
    setPartialQuote(quote.split(" ").slice(0, curIndex + 1).join(" "))
  }, [partialQuote, curIndex])

  return (
    <div className="kanye">
      <img src={KanyeFace} />
      <SpeechBubble quote={partialQuote} />
      <Mouth 
        word={quote.split(" ")[curIndex]} 
        updateIndex={setCurIndex}/>
    </div>
  );
};

export default Kanye;