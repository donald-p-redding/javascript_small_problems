//Write a program that asks the user to enter an integer greater than 0, 
//then asks if the user wants to determine the sum or the product of 
//all numbers between 1 and the entered integer, inclusive.

let rlSync = require('readline-sync');

console.log('Please enter an integer greater than 0:');
let integer = parseInt(rlSync.prompt());

console.log('Enter "s" to compuer the sum, or "p" to compute the product:');
let evalType = rlSync.prompt();

let value = 1;

for (let count = 2; count <= integer; count += 1) {
  if (evalType === 's') {
    value += count;
  } else {
    value *= count;
  }
}

if (evalType === 's') {
  console.log(`The sum of the integers between 1 and ${integer} is ${value}`)
} else {
  console.log(`The product of the integers between 1 and ${integer} is ${value}`)
}




