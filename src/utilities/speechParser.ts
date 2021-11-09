import Quote from '../Interfaces/Quote';


function wordParser(quote: String){
  const split = quote.toLowerCase().split("");
  const wordVowels: [string[]] = [[]];

  split.forEach(word => wordVowels.push(wordVowelParser(word)));

  return wordVowels;
}

const vowels = "aeiou";

function wordVowelParser(word: string): string[]{
  const split = word.split("");
  return split.filter(letter => vowels.includes(letter));
}

function getClassNamesFromVowels(wordVowels: [string[]]): string[]{
  let classNames:string[] = [];

  return classNames;
}