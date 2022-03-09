//Write a funciton that combines the contents of two arrays with NO
//duplicated. Even if the origional array has duplicate values
//the return array should only have unique values.

//The function should return a new array.

//the return array can contain all the elements from the first array
//iterate over the second array
  //if the return array contains the element already --> skip
  //else add the element into the array

function union(array1, array2) {
  let joinedArray = array1.slice();
  for (let number of array2) {
    if (!joinedArray.includes(number)) {
      joinedArray.push(number);
    }
  }
  return joinedArray;
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]