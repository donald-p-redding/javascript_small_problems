//Write a function that will take a string as an input and return
//a string where all the cases are swapped for alphabetic characters
//all other characters shoukd remain unchanged

function swapCase(string) {
  return string.split('').map(char => {
    return /[A-Z]/.test(char) ? char.toLowerCase() : char.toUpperCase();
  }).join('');
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"