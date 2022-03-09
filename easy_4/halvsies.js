//Write a function that will take an array and divide it's elements amongst 
//two arrays that will be returned in a nested array.

//The first half of the elements should be in the first array
//The second half should be in the second array

//If the array has an odd length --> the extra element should be included in
//the first array.

// function halvsies(array) {
//   let firstArray = [];
//   let secondArray = [];
//   let lastIndex = 0;

//   for (let index = 0; index < (array.length / 2); index += 1) {
//     firstArray.push(array[index]);
//     lastIndex = index;
//   }

//   for (let index = lastIndex + 1; index < array.length; index +=1) {
//     secondArray.push(array[index]);
//   }
//   return [firstArray, secondArray];
// }

function halvsies(array) {
  let half = Math.ceil(array.length / 2);
  let firstArray = array.slice(0,half);
  let secondArray = array.slice(half);

  return [firstArray, secondArray];
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]