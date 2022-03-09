//Write a function that takes a string, doubles every character in the string, 
//and returns the result as a new string.

function repeater(string) {
  let repeatedString = '';
  for (let char of string) {
    repeatedString += char + char;
  }

  return repeatedString;
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""