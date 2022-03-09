//Modify the last example so that it no longer consideres non-alphabetic
//characters when determining if the next char should be uppercased or not

//They should still be included in the solution but not counted towards
//deciding if the next char should be upper or lower case.

function staggeredCase(string) {
  let toCap = true;
  return string.toLowerCase().split('').map(char => {
    if (/[a-z]/.test(char) && toCap) {
      toCap = false;
      return char.toUpperCase();
    } else if (/[a-z]/.test(char)) {
      toCap = true;
    }
    return char
  }).join('');
}

staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"