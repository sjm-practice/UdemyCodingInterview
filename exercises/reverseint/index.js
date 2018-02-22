// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt2(n) {
  const isNegative = n < 0;
  let newNum = n;

  if (isNegative) {
    newNum = n * -1;
  }

  let numStr = newNum.toString();
  numStr = numStr.split("").reverse().join("");
  newNum = Number.parseInt(numStr, 10);

  if (isNegative) {
    newNum = newNum * -1;
  }

  return newNum;
}

function reverseInt(n) {
  const newNum = parseInt(n.toString().split("").reverse().join(""), 10);

  return newNum * Math.sign(n); // re-apply original sign
}

module.exports = reverseInt;
