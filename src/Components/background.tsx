import React, { ReactNode } from "react";
import Gap from "./gap.jpg";
import "./background.css";

// Component will render the background (GAP Storefront)
// 

interface BackgroundProps {
  children?: ReactNode
}

const Background = (props: BackgroundProps) => (
  <div className="background">
    <img src={Gap} />
    {props.children}
  </div>
);

export default Background;