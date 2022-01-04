import React from 'react';

const Mouth = ({ curLetter} : {curLetter: string}) => {
  console.log("curLetter: " + curLetter)
  const className = `Mouth ${curLetter.toUpperCase()}`;
  console.log("classname: " + className);
  return (
    <div className={className}></div>
  )
}

export default Mouth;