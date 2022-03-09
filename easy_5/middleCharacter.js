//Write a function that takes a non-empty string argument and returns the 
//middle character(s) of the string. 

//If the string has an odd length, you should return exactly one character. 
//If the string has an even length, you should return exactly two characters.

//determine the length of the string and divide by 2
  //us math.floor to get the closest index to start at

function centerOf(string) {
  let centerIndex = Math.floor(string.length / 2);
  if (string.length % 2 === 0) {
    return string.slice(centerIndex - 1, centerIndex + 1);
  } else {
    return string.slice(centerIndex, centerIndex + 1);
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"