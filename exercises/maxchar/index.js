// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};

  for (let char of str) {
    charMap[char] = charMap[char]++ || 1;
  }

  // create an array from the object [['a': 1], ['b': 2], ['c': 1], ...]
  const tuples = Object.entries(charMap);

  // find the tuple with the highest value
  const mT = tuples.reduce((maxT, currT) => (currT[1] > maxT[1] ? currT : maxT), ["", 0]);

  return mT[0];
}

function maxChar1(str) {
  const strObj = str.split("").reduce((obj, char) => {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }

    return obj;
  }, {});

  // create an array from the object [['a': 1], ['b': 2], ['c': 1], ...]
  const tuples = Object.entries(strObj);

  // find the tuple with the highest value
  const mT = tuples.reduce((maxT, currT) => (currT[1] > maxT[1] ? currT : maxT), ["", 0]);

  return mT[0];
}

module.exports = maxChar;
