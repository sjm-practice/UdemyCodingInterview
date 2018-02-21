// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function reverse(str) {
  return str.split("").reduce((rStr, char) => char + rStr, "");
}

function palindrome2(str) {
  const rStr = reverse(str);
  return rStr.localeCompare(str) == 0;
}

function palindrome1(str) {
  const rStr = str.split("").reverse().join("");
  return rStr === str;
}

// less efficient, but neat use of 'every' (compares more chars than needed)
//    also note the use of indexing in to a string. didn't know / remember that
function palindrome(str) {
  return str.split("").every((char, i) => char === str[str.length - 1 - i]);
}

module.exports = palindrome;
