export function wordParser(quote: String) {
  const split = quote.toLowerCase().split(" ");
  let vowelsPerWord: Array<string[]> = new Array<string[]>();

  split.forEach((word) => vowelsPerWord.push(getVowelsForWord(word)));
  console.log(vowelsPerWord);
  return vowelsPerWord;
}

const vowels = "aeiouy";

export function getVowelsForWord(word: string): string[] {
  const split = word.split("");
  return split.filter((letter) => vowels.includes(letter));
}

function getClassNamesForWord(vowels: string[]): string[] {
  return vowels.map((vowel) => `vowel-${vowel}`);
}

export function getClassNamesWords(wordVowels: string[][]): string[][] {
  // each wordVowel is an array of vowels
  // for each subArray, iterate over the vowels and populate an array
  // that will have the necessary class names for the word
  // once the class names array for the word is complete
  // push it into the return array
  return wordVowels.map((vowelsForWord) => getClassNamesForWord(vowelsForWord));
}

// input: [a, e, i, o]
