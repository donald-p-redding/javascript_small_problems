//Write a function that will return an array of all palindromic substrings
//within a word.

//Assume that palindromes are case sensative and that single chars are NOT considered
//palindromes.

//Order of return string elements should be the order that the palindroms occur
//from left to right.

//generate an array of all substrings
//iterate over the array and filter out all substrings that are NOT palindroms
//return the resulting array

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


function leadingSubstrings(word) {
  return word.split('').map((char, idx, chars) => {
    return chars.slice(0, idx + 1).join('');
  });
}

function inverted(string) {
  return string.split('').reverse().join('');
}

function isPalindrome(string) {
  if (string.length === 1) {return false};
  return string === inverted(string);
}

function palindromes(word) {
  return substrings(word).filter(isPalindrome);
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]