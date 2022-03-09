//Refactor the last function, but this time have the function be:
  //case insensative
  //skip or DO NOT consider non-alphanumeric chars

  function isPalindrome(string) {
    let forwards = string;
    let backwards = string.split('').reverse().join('');
  
    return forwards === backwards;
  }

  function isRealPalindrome(string) {
    let filteredString = string.toLowerCase().match(/[a-z]||[0-9]/g).join('');
    return isPalindrome(filteredString);
  }

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false