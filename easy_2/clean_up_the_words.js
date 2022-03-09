//Given a string that consists of some words and an assortment of 
//non-alphabetic characters, write a function that returns that \
//string with all of the non-alphabetic characters replaced by spaces. 

//If one or more non-alphabetic characters occur in a row, you should only 
//have one space in the result (i.e., the result string should never 
//have consecutive spaces).

// function isAlphabetic(char) {
//   return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z';
// }

// function cleanUp(string) {
//   let cleanedString = '';
//   for (let index = 0; index < string.length; index += 1) {
//     if (index + 1 >= string.length) break;
//     let char = string[index];
//      if (isAlphabetic(char)) {
//        cleanedString += char;
//      } else if (isAlphabetic(string[index + 1])) {
//       cleanedString += ' ';
//      } else {
//        continue;
//      }
//   }
//   return cleanedString;
// }

//FURTHER EXPLORATION
//Can you write a solution that uses a regular expression

function cleanUp(string) {
  return string.replace(/\W+/g, ' ');
}

cleanUp("---what's my +*& line?");    // " what s my line "