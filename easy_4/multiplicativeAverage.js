//Write a function that takes an array, multiplies all of the elements togeather
//and then divides this number by the total number of elements in the input array

//The function should return the average as a string with three deimal places
//of precision (rounded);

function showMultiplicativeAverage(array) {
  let multiplicativeAverage = array.reduce((agg = 1, number) => agg * number) / array.length;
  return multiplicativeAverage.toFixed(3);
}

showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"