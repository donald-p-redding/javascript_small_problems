//Build a program that asks the user to enter the length and width of a 
//room in meters, and then logs the area of the room to the console in 
//both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// let rlSync = require('readline-sync');
// const TO_SQUARE_FEET = 10.7639;

// console.log('Enter the length of the room in meters');
// let length = Number(rlSync.prompt());
// console.log('Enter the width of the rooom in meters');
// let width= Number(rlSync.prompt());

// let squareMeters = (length * width).toFixed(2);

// console.log(`The area of the room is ${squareMeters} square meters (${squareMeters * TO_SQUARE_FEET}) square feet.`);

//REFACTOR

let rlSync = require('readline-sync');

function calcArea() {
  let CONVERSION_FACTOR = 10.7639;

  console.log('Type \'m\' for square meters.');
  console.log('Type \'s\' for square feet');
  let unitType = rlSync.prompt();
  
  console.log('Please enter a lenght:');
  let length = Number(rlSync.prompt());
  console.log('Please enter a width:')
  let width = Number(rlSync.prompt());

  let area = (length * width).toFixed(2);

  if (unitType === 'm') {
    console.log(`The area of the room is ${area} square meters (${area * CONVERSION_FACTOR}) square feet`);
  } else {
    console.log(`The area of the room is ${area} square feet (${area / CONVERSION_FACTOR}) square meters`);

  }
}

calcArea();


