//Write a function that takes an array of numbers and returns an array with 
//the same number of elements, but with each element's value being the 
//running total from the original array.

// function runningTotal(array) {
//   let total = 0;
//   let runningTotal = []
//   for (let number of array) {
//     total += number;
//     runningTotal.push(total);
//   }
//   return runningTotal;
// }

function runningTotal(array) {
  let sum = 0;
  let runningTotals = array.map(number => sum += number);
  return runningTotals;
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []