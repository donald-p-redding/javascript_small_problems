//Write a function that takes an array of strings and returns an array of the
//same array of strings only the vowels are removed.

function removeVowels(array) {
  return array.map(string => string.replace(/[aeiou]/ig, ''));
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]