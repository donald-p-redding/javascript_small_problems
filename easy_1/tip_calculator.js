//Create a simple tip calculator. 
//The program should prompt for a bill amount and a tip rate. 
//The program must compute the tip, and then log both the tip and the 
//total amount of the bill to the console. 

//You can ignore input validation and assume that the user will put in numbers.

let rlSync = require('readline-sync');

function tipCalculator(bill, tipPercent) {
  let tipAmount = (bill * (tipPercent/100))
  let total = (bill + tipAmount);

  console.log(`The tip is $${tipAmount.toFixed(2)}`);
  console.log(`The totalbill amount is $${total.toFixed(2)}`)
}

console.log('What is the bill?');
let bill = Number(rlSync.prompt());

console.log('What is the tip percent?');
let tipPercent = Number(rlSync.prompt());

tipCalculator(bill, tipPercent);