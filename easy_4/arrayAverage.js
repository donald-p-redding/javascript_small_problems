//Given an array, add all the elements togeather and divide by the total
//number of elements to produce an average.

//The value returned should ALWAYS be rounded down to only contain 
//the integer portion of the average.

function average(array) {
  let sum = array.reduce((agg = 0, num) => agg + num);
  return Math.floor(sum / array.length);
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40