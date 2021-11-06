import Quote from '../Interfaces/Quote';


enum MouthVowels{
  A = "A",
  E = "E",
  I = "I",
  O = "O",
  U = "U"
}

function speechParser(quote: String){
  const split = quote.toLowerCase().split("");
  const wordVowels: [string[]] = [[]];

  for(let i = 0; i < split.length; i++){
    wordVowels.push(getVowelsFromWord(split[i]));
  }

  return wordVowels;
}

const vowels = "aeiou"

function getVowelsFromWord(word: string){
  const vowels: string[] = [];


  return vowels;
}



