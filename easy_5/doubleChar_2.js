//Write a function that takes a string, doubles every consonant character in 
//the string, and returns the result as a new string. 

//The function should not double vowels ('a','e','i','o','u'), digits, 
//punctuation, or whitespace.

const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
                  'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

function double(char) {
  return char + char;
}

function isConsonant(char) {
  return CONSONANTS.includes(char.toLowerCase())
}

function doubleConsonants(string) {
  let doubleString = '';
  
  for (let char of string) {
    doubleString += isConsonant(char) ? double(char) : char;
  }

  return doubleString;
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""