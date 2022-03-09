//Write a function that will take in a string and return a new string that
//capitalizes the beginning of each word and lower cases the rest.

function wordCap(string) {
  let words = string.split(' ');
  return words.map(upperFirst).join(' ');
}

function upperFirst(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'