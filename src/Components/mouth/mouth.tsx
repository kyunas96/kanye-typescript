import React, { useState, useEffect } from 'react';
// import "./mouth.css";

interface MouthProps {
  word: string
  updateIndex: Function
}

const Mouth = ({ word, updateIndex }: MouthProps) => {
  const [curCharIndex, setCurCharIndex] = useState<number>(0);
  const [className, setClassName] = useState<string>("");

  // take in the word and deal with setTimeout hear for each char in 
  // the word
  // when all the letters of the word have been iterated over, call
  // the updateWord function to get the next word from the parent

  useEffect(function() {
      const curChar = word[curCharIndex];

  }, [])

  // reset the state when a new word is passed down through props
  useEffect(function(){
    setClassName("");
  }, [word])

  return (
    <div className={className}></div>
  )
}

export default Mouth;