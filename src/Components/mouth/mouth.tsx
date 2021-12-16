import React, { useState, useLayoutEffect, useEffect } from 'react';

const Mouth = ({ curLetter} : {curLetter: string}) => {
  const className = `Mouth ${curLetter.toUpperCase()}`;
  console.log("classname: " + className);
  return (
    <div className={className}></div>
  )
}

export default Mouth;