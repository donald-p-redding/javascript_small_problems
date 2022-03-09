//Write a function that takes a grocery list as a two dimensional array and returns
//a one dimensional array.

//create helper to take an array with integer and return an array with the
//correct number of elements

function allStrings(string, quantity) {
  return new Array(quantity).fill(string);
}


function buyFruit(list) {
  return list.reduce((array, itemQuantity) => {
    array = array.concat(allStrings(...itemQuantity));
    return array;
  }, []);
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]