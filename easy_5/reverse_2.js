//write a function that reverses the words of an array
//on top of that --> if the word is five or more chars long
//reverse the letters of the word as well

//reverse words first
//iterate over the array and reverse letters as needed

function selectiveReverse(word) {
  if (word.length < 5) return word;
  return word.split('').reverse().join('');
}


function reverseWords(string) {
  return string.split(' ').map(word => selectiveReverse(word)).join(' ');
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"