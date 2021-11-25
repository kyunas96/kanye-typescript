import {getVowelsForWord, wordParser, getClassNamesWords} from './speechParser';

it('should return all the vowels present in a word', () => {
  const res = getVowelsForWord("sentence");
  const target = ["e", "e", "e"];
  expect(res).toEqual(target);
})

it('should return an array of arrays', () => {
  const res = wordParser("kanye thinks he is the greatest");
  const target = res.map(_ => true);
  const tests = res.map(subArray => Array.isArray(subArray));
  expect(tests).toEqual(target);
})

it('should return the class names pertaining to the vowels in the word', () => {
  const res = wordParser("this is my sentence");
  const classNames = getClassNamesWords(res);
  console.log(classNames);
})