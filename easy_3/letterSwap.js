//Given a string of words seperated by spaces.
//Return a string where the first and last char of every word are swapped.

//Assume every string will have nothing but words and spaces.
//There will be no double spaces.

//break string into words
//iterate over each word and swap chars

function swapLetters(string) {
  if (string.length === 1) return string;
  
  let firstChar = string.slice(0,1);
  let middle = string.slice(1, string.length - 1);
  let lastChar = string.slice(string.length - 1);
  return lastChar + middle + firstChar;
}

function swap(string) {
  let words = string.split(' ');
  return words.map(word => swapLetters(word)).join(' ');
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"