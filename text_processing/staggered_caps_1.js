//Write a function that will stagger the case of each char in a word.
//starting from the first character which should be caps and be followed by a lowercse

function staggeredCase(string) {
  let chars = string.toLowerCase().split('');
  return chars.map((char, idx) => {
    if (idx % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char
    }
  }).join('');
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"