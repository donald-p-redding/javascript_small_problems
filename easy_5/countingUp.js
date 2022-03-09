//Write a function that takes an integer argument and returns an array 
//containing all integers between 1 and the argument (inclusive), 
//in ascending order.

function sequence(number) {
  let seq = [];
  for (let i = 1; i <= number; i += 1) {
    seq.push(i);
  }
  return seq;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]