//Write a function that takes a string as an argument and returns an array 
//of all the substrings of that string. Each substring should begin with the 
//first letter of the word.

//The returned array of substrings should be sorted based on the length of each substring
//smallest to largest.


function leadingSubstrings(word) {
  return word.split('').map((char, idx, chars) => {
    return chars.slice(0, idx + 1).join('');
  });
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]