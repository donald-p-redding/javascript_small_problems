//Write a function that takes a string of words and returns a object
//the shows how many of each sized word are in the string.

//split the string into words
//map over the word array and return the length of each word
//iterate over the lengths
  //if the object already has a key for the length --> add 1
  //if not create a new properity and initialize to 1
//return the object

function wordSizes(string) {
  let charCounts = string.split(' ').map(word => word.length);
  let wordSizes = {};

  if (string.length === 0) return wordSizes;

  for (let count of charCounts) {
    if (count in wordSizes) {
      wordSizes[count] += 1
    } else {
      wordSizes[count] = 1
    }
  }
  return wordSizes;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}