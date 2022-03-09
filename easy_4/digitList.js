//Write a function that takes in a single integer as an argument
//and will return an array of digits (number) that the input
//number is comprised of.

function digitList(number) {
  return String(number).split('').map(digit => parseInt(digit, 10));
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]