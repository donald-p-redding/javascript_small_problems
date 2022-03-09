//Write a function that takes a string argument consisting of a first name, 
//a space, and a last name, and returns a new string consisting of the last 
//name, a comma, a space, and the first name.

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

swapName('Mary Higgens Clark');    // "Roberts, Joe"

//Further Exploration
//What is the person had more than one first name. Refactor the solution
//so it can handle this

function swapName(name) {
  let [last, ...first] = name.split(' ').reverse();

  return `${last}, ${first.reverse().join(' ')}`;
}