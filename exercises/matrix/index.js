// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

//
// coded along for this one.
// no real tricks, or strategy shortcuts. you just need to think
// about what it happening, and code it.
// loop around the outside. make your loop path smaller (moving inside the matrix).
// repeat until reaching center.
//
function matrix(n) {
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let startRow = 0,
    startCol = 0,
    endRow = n - 1,
    endCol = n - 1;
  let counter = 1;

  while (startCol <= endCol && startRow <= endRow) {
    // top row
    for (let i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endCol] = counter;
      counter++;
    }
    endCol--;

    // bottom row
    for (let i = endCol; i >= startCol; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      results[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }
  return results;
}

module.exports = matrix;
