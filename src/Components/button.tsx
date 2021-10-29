import React from 'react';
import './button.css';

const Button = (props: any ) => (
  
  <button className="prayer-button" onClick={props.action}>In Yeezy we believe 🙏</button>
)

export default Button;