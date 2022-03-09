//Build a program that logs when the user will retire and how many more 
//years the user has to work until retirement.

let rlSync = require('readline-sync');

let currentAge = Number(rlSync.question('What is your age?'));
let retirementAge = Number(rlSync.question('When would you like to retire?'));

let currentYear = (new Date).getFullYear();
let retirementYear = currentYear + (retirementAge - currentAge);

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`)
console.log(`You have ${retirementAge - currentAge} years of work to go!`)

