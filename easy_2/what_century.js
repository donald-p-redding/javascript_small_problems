//Write a function that takes a year as input and returns the century. 
//The return value should be a string that begins with the century number, 
//and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

//New centuries begin in years that end with 01. 
//So, the years 1901 - 2000 comprise the 20th century.

// if year is EVENLY divisible by 100 century stays the same
// else divide by 100, drop decimals and add 1

function suffix(century) {
  if (catchOutliers(century % 100)) {
    return 'th';
  }

  switch (century % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function catchOutliers(number) {
  return number === 11 || number === 12 || number === 13;
}


function century(year) {
  let century;
  if (year % 100 === 0) {
    century = String(year / 100);
  } else {
    century = String(parseInt(year / 100) + 1);
  }

  return century + suffix(century);
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"