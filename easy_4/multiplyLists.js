//Write a function that takes two arrays as inputs. Mutiply each element
//from both arrays that share an indexed position.

//return an array that contains the results of all of these processes.

function multiplyList(arr1, arr2) {
  let returnArray = [];
  for (let index = 0; index < arr1.length; index += 1) {
    returnArray.push(arr1[index] * arr2[index]);
  }
  return returnArray;
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]