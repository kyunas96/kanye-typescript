import React from 'react';
import "./mouth.css";

const Mouth = ({ mouthImageFile }: { mouthImageFile: string }) => (
  <div className={`mouth ${mouthImageFile}`}>
    <img
      src={`/mouths/${mouthImageFile}.png`}
      alt={mouthImageFile}
    />
  </div>
)

export default Mouth;