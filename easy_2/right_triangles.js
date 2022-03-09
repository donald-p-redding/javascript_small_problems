//Write a function that takes an argument n and logs a right triangle
//to the console where the tip of the triangle is in the upper-right corner.

// triangle(5);

//     *
//    **
//   ***
//  ****
// *****

// triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********

//repeat n - count for spacing
//repeat count for stars

//repeat funciton takes two args
  //symbol
  //number of times to repeat
//take in number and symbol and return string that can be concatenated

function repeat(symbol, times) {
  let repeatSeq = '';
  for (let count = 1; count <= times; count += 1) {
    repeatSeq += symbol;
  }
  return repeatSeq;
}

function triangle(n) {
  for (let count = 1; count <= n; count += 1) {
    let padding = repeat(' ', (n - count));
    let stars = repeat('*', count);
    console.log(padding + stars);
  }
}

triangle(5);
triangle(9);