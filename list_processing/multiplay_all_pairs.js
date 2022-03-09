//Write a function that will take two arrays as an argument.
//The function should produce all the possible products (multiply) between
//each combination of elements between both arrays

//The function should return a one dimensional array that contains all of the products
//sorted in ascending numerical order.

//Version 1

function multiplyAllPairs(array1, array2) {
  let products = [];
  array1.forEach(number1 => {
    array2.forEach(number2 => products.push(number1 * number2));
  });

  return products.sort((a,b) => a - b);
}

//Version 2

function multiplyAllPairs(array1, array2) {
  
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]