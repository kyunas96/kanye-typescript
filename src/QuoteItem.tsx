import React from 'react';
import Quote from './Interfaces/Quote';

const QuoteItem = ({ text, timestamp }: Quote): JSX.Element => {
  return (
    <li>
      <span>{text}</span>
      <span>{timestamp?.toDateString()}</span>
    </li>
  )
}

export default QuoteItem;