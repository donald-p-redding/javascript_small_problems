//Write a function that returns true if a number is palindromic --> false
//otherwise.

function isPalindrome(string) {
  let forwards = string;
  let backwards = string.split('').reverse().join('');

  return forwards === backwards;
}

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true