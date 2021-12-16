import React, { useState, useLayoutEffect, useEffect } from "react";
import Mouth from "../mouth/mouth";
import SpeechBubble from "../speechBubble/speachBubble";
import KanyeFace from "./kanye.png";
import "./kanye.css";
import { queryByTestId } from "@testing-library/react";

const Kanye = ({ quote }: { quote: string }) => {
  const [partialQuote, setPartialQuote] = useState<string>("");
  const [curIndex, setCurIndex] = useState<number>(0);
  const [curLetter, setCurLetter] = useState<string>("");

  useLayoutEffect(function () {
    if (curIndex < quote.split(" ").length) {
      setPartialQuote(quote.split(" ").slice(0, curIndex + 1).join(" "))
    }
  }, [partialQuote, curIndex])


  // use the index as an upperbound for slicing the quote as well as for
  // passing the 
  useLayoutEffect(function () {
    // setCurIndex(0);
    let i = 0;
    while(i < quote.length){
      const timeDelta = (i + 1) * 100;
      const callback = function () {
        const curSlice = quote.slice(0, i + 1);
        const curLetter = curSlice[curSlice.length - 1];
        console.log(curSlice);
        setPartialQuote(curSlice);
        setCurIndex(i);
        setCurLetter(curLetter)
      };
      setTimeout(callback, timeDelta)
    }
    setTimeout(function(){
      setCurLetter("");
    }, (i + 1) * 100);
  }, [quote])


  return (
    <div className="kanye">
      <img src={KanyeFace} />
      <SpeechBubble quote={partialQuote} />
      <Mouth curLetter={quote[curIndex]} />
    </div>
  );
};

export default Kanye;