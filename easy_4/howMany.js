//Count and log the occurences of each element in a given array.
//The function should log to the console.

function countOccurrences(array) {
  let occurrences = {};
  for (let element of array) {
    if (element in occurrences) {
      occurrences[element] += 1;
    } else {
      occurrences[element] = 1;
    }
  }

  for (let key in occurrences) {
    console.log(`${key} => ${occurrences[key]}`);
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2