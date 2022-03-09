//Write a funtion that takes a single integer as an argument and will
//return the sum of its digits.

function sum(number) {
  return String(number).split('').reduce((total, number) => total + parseInt(number, 10), 0);
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45