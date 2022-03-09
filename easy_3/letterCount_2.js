//Modify our previous function so that it does NOT count non-letters
//when determining word sizes

//example
  //'it's' --> 3 NOT 4

  function letterCount(word) {
    return word.match(/[a-z]/g).length
  }

  function wordSizes(string) {
    let wordSizes = {};
    if (string.length === 0) return wordSizes;
    
    let charCounts = string.toLowerCase().split(' ').map(word => letterCount(word));
  
  
    for (let count of charCounts) {
      if (count in wordSizes) {
        wordSizes[count] += 1
      } else {
        wordSizes[count] = 1
      }
    }
    return wordSizes;
  }

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}