//Write a function that takes one argument, a positive integer, 
//and returns a string of alternating '1's and '0's, always starting 
//with a '1'. The length of the string should match the given integer.

//make a toggle that will reset after each iteration
//use a terneary statement and logical NOT

function stringy(length) {
  let digitString = '';
  let digitIsOne = true;
  while (digitString.length < length) {
    let digit = digitIsOne ? '1' : '0';
    digitString += digit;
    digitIsOne = !digitIsOne;
  }
  return digitString;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"