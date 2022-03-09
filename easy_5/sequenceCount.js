//Write a function that takes two arguments.
  //A number to multiply by
  //And the number of multiples you wish to produce.

//retrun an array containing all multiples.

function sequence(count, startingNum) {
  let returnSeq = []
  
  for (let index = 0; index < count; index += 1) {
    if (index === 0) {
      returnSeq.push(startingNum);
    } else {
      returnSeq.push(startingNum * (index + 1));
    }
  }
  return returnSeq;
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []