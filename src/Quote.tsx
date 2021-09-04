import React, { FC, ReactElement } from 'react';
import QuoteType from "./QuoteInt";

const Quote: FC<QuoteType> = ({ text, timestamp }): ReactElement => (
  <li>
    <span>{text || null}</span>
    <span>{timestamp || null}</span>
  </li>
)

export default Quote;