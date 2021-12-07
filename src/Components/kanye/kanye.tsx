import React from "react";
import Mouth from "../mouth/mouth";
import KanyeFace from "./kanye.png";
import "./kanye.css";

const Kanye = ({mouthImageFile} : {mouthImageFile: string}) => (
  <div className="kanye">
    <img src={KanyeFace} />
    <Mouth mouthImageFile={mouthImageFile} />
  </div>
);

export default Kanye;