//Write a function that takes a string and returns an object that contains the following
//metircs:
  //The number of lowercase chars
  //The number of uppercase chars
  //The number of chars that are neither

function letterCaseCount(string) {
  let lowerArray = string.match(/[a-z]/g) || [];
  let upperArray = string.match(/[A-Z]/g) || [];
  let neitherArray = string.match(/[^a-z]/ig) || [];

  return {
    lowercase: lowerArray.length,
    uppercase: upperArray.length,
    neithercase: neitherArray.length,
  };
}

  letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
  letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
  letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
  letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }