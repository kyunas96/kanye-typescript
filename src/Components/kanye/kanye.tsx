import React, { useState, useLayoutEffect, useEffect } from "react";
import Mouth from "../mouth/mouth";
import SpeechBubble from "../speechBubble/speachBubble";
import KanyeFace from "./kanye.png";
import "./kanye.css";

const Kanye = ({ quote }: { quote: string }) => {
  const [partialQuote, setPartialQuote] = useState<string>("");
  const [curIndex, setCurIndex] = useState<number>(0);
  const [curLetter, setCurLetter] = useState<string>("");

  // useLayoutEffect(function () {
  //   if (curIndex < quote.split(" ").length) {
  //     setPartialQuote(quote.split(" ").slice(0, curIndex + 1).join(" "))
  //   }
  // }, [partialQuote, curIndex])


  // use the index as an upperbound for slicing the quote as well as for
  // passing the 
  useLayoutEffect(function () {
    setCurIndex(0);
    let i = 0;
    while(i < quote.length){
      const x = i;
      const timeDelta = i * 100;
      const callback = function(){
        console.log("i: " + x);
        const curSlice = quote.slice(0, x + 1);
        const curLetter = curSlice[curSlice.length - 1];
        setPartialQuote(curSlice);
        setCurIndex(x);
        setCurLetter(curLetter);
      };
      i++;
      setTimeout(callback, timeDelta)
    }
    setTimeout(function(){
      setCurLetter("");
      setCurIndex(0);
    }, (quote.length) * 100);

  }, [quote]);


  return (
    <div className="kanye">
      <img src={KanyeFace} />
      <SpeechBubble quote={partialQuote} />
      {curIndex 
        && <Mouth curLetter={quote[curIndex]} /> }
    </div>
  );
};

export default Kanye;