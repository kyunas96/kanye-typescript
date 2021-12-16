import React, { useState, useLayoutEffect, useEffect } from 'react';
// import "./mouth.css";

interface MouthProps {
  word: string
  curWordIndex: number
  updateWordIndex: Function
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const Mouth = ({ word, updateWordIndex, curWordIndex }: MouthProps) => {
  const [curCharIndex, setCurCharIndex] = useState<number>(0);
  const [className, setClassName] = useState<string>("");

  useEffect(function () {
    // reset the state when a new word is passed down through props
    setClassName("");
    setCurCharIndex(0);
    // when a new word is passed through props, put all classChanges
    // into the callback queue
    if (word) {
      for (let i = 0; i <= word.length; i++) {
        let callback = (i === word.length) ?
          () => { updateWordIndex(curWordIndex + 1) } :
          () => { setClassName(`mouth ${word[i].toUpperCase()}`)};
        let timeDelta = (i + 1) * 100;

        setTimeout(function () {
          callback();
        }, timeDelta)
      }
    }
  }, [word])

  useEffect(() => {}, [className])

  useEffect(function () {
    console.log("currentClassName: " + className);
  })

  return (
    <div className={className}></div>
  )
}

export default Mouth;