//Create a function that will generate all the possible substrings that can be
//generated from a word argument.

//The substrings should all be returned in a one dimensional array and be ordred
//FIRST by which index the substring was generated from and then the LENGTH of each substring
//that was generated at each indexes position.



// function substrings(word) {
//   let substrings = [];
//   for (let index = startIndex; startIndex < word.length; startIndex += 1) {
//     let substring = word.substring(startIndex);
//     substrings.push(leadingSubstrings(substring));
//   }
//   return substrings;
// }

function leadingSubstrings(word) {
  return word.split('').map((char, idx, chars) => {
    return chars.slice(0, idx + 1).join('');
  });
}

//Further Exploration --  can you do the same using list processing functions.
function substrings(word) {
  let chars = word.split('');
  let substrings = chars.map((char, index) => {
    return chars.slice(index).join('');
  });

  return substrings.reduce((array, substring) => {
    array = array.concat(leadingSubstrings(substring));
    return array;
  }, []);
}


substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]