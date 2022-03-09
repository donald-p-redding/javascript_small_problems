//Write a function that calculates and returns the index of the first 
//Fibonacci number that has the number of digits specified by the argument. 
//(The first Fibonacci number has an index of 1.)

//Return the number of cycles that it takes to generate a n-th digit Fib number

//we will need to use BigInt --> simply append the letter n to the number
//you are using.

//The first Fib number has an index or count of 1;

//may need a helper method to calculate the Fib number
  //last two digits in sequence summed will be the next value

function findFibonacciIndexByLength(numberOfDigits) {
  let first = 1n;
  let second = 1n;
  let cycles = 2n;
  let fibNum;

  do {
    fibNum = first + second;
    first = second;
    second = fibNum;
    cycles += 1n;
  } while (String(fibNum).length < numberOfDigits);

  return cycles;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.