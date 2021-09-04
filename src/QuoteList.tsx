import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quote from './Interfaces/Quote';
import QuoteItem from './QuoteItem';
import Button from './Components/button';

/*
  list must grab 
*/

const QuoteList: React.FC = () => {
  let [quote, setQuote] = useState<Quote>({
    text: "Kanye",
    timestamp: new Date()
  });
  let [initialRender, setInitialRender] = useState<boolean>(true);


  // this callback will be responsible for getting the first quote on the 
  // initial render
  useEffect(() => {
    if (initialRender) {
      getQuote();
      setInitialRender(false);
    }
  }, [initialRender])

  // this function will be responsible for grabbing a new quote when the button
  // pressed
  const getQuote = async (): Promise<Quote> => {
    const response = await axios.get<any>("https://api.kanye.rest/");
    console.log("quote", response);
    let newQuote: Quote = {
      text: response.data.quote,
      timestamp: new Date()
    }
    setQuote(newQuote);
    return newQuote;
  }

  const addQuote = (quote: Quote): void => {
    setQuote(quote)
  }

  return (
    <div>
      <Button action={getQuote}/>
      <ul>
        <QuoteItem text={quote.text} timestamp={quote.timestamp}/>
      </ul>
    </div>
  )

}

export default QuoteList;