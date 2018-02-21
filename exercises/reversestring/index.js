// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse3(str) {
  let rStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    rStr = rStr.concat(str.charAt(i));
  }

  return rStr;
}

function reverse(str) {
  return str.split("").reduce((rStr, char) => char + rStr, "");
}

function reverse1(str) {
  let rStr = "";

  for (let char of str) {
    rStr = char + rStr;
  }

  return rStr;
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

module.exports = reverse;
