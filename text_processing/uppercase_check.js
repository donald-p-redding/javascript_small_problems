//Write a function that will determine of all the alphabetic characters in a string 
//are uppercased.

//Ignore characters that are not alphabetic.

function isUppercase(string) {
  return !/[a-z]/.test(string);
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true