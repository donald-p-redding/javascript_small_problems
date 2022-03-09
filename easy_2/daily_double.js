//Write a function that takes a string argument and returns a new string 
//that contains the value of the original string with all consecutive 
//duplicate characters collapsed into a single character.

// function crunch(string) {
//   let crunchedString = '';
//   for (let index = 0; index <= string.length - 1; index += 1) {
//     if (string[index] === string[index + 1]) continue;
//     crunchedString += string[index];
//   }
//   return crunchedString;
// }

//Further Exploration
//Try to solve the task using regular expressions.

function crunch(string) {
  return string.replace(/(.)\1+/g, '$1');
}

console.log(crunch('4444abcabccba'));

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""