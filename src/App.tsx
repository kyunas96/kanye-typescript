import React, { useState, useEffect } from 'react';
import Background from './Components/background';
import Kanye from './Components/kanye/kanye';
import SpeechBubble from './Components/speechBubble/speachBubble';
import './App.css';
import Button from './Components/button';
import { JsxEmit } from 'typescript';

const interruptQuote = `Yo I’ll let you finish, but what the hell you
doin while Yeezy speaks`;

function App() {
  const [fullQuote, setFullQuote] =
    useState<string>("I'm gunna save this place");


  // useEffect(() => {
  //   if(curIndex <= fullQuote.length){
  //     setPartialQuote(fullQuote.slice(0, curIndex));
  //     setTimeout(function(){
  //       setCurIndex(curIndex + 1);
  //     }, 500);
  //   }
  // }, [curIndex]);

  // create a function that will iterate through the quote and display
  // it to the 


  // for each word, create a setTimeout that will iterate over the sub array
  // of image file names, when the subArray is exhausted, a new setTimeout will be 
  // created, adding the next word from the quote to display and returning a 
  // setTimeout that will iterate over the next sub array of image file names

  return (
    <div className="App">
      <Background />
      <Kanye quote={fullQuote} />
      {/* pass quote from state as prop*/}
      {/* pass fetch function to button */}
      <Button />
    </div>
  );
}

export default App;
