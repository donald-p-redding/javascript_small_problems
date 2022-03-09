//Write a function that computes the sum of all numbers between 1 and some
// other number, inclusive, that are multiples of 3 or 5. 

//For instance, if the supplied number is 20, the result should be 
//98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20)

//assume any input will be a integer.

function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(limit) {
  let sum = 0;
  for (let number = 3; number <= limit; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }
  return sum;
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168