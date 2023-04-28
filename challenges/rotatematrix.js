// Create a function to rotate a two-dimensional matrix of N * N integer elements num times, where if num is positive, the rotation 
// is clockwise, and if not, counterclockwise.

// Examples

// rotateTransform([
//   [2, 4],
//   [0, 0]
// ], 1) ➞ [
//   [0, 2],
//   [0, 4]
// ]

// rotateTransform([
//   [2, 4],
//   [0, 0]
// ], -1) ➞ [
//   [4, 0],
//   [2, 0]
// ]

function rotateTransform(arr, num){
  let newMatrix;
  if (num > 0){
    newMatrix = arr[0].map((col, i) => arr.map(row => row[i]).reverse());
  };
  if (num < 0){
    newMatrix = arr[0].map((col, i) => arr.map(row => row[i])).reverse();
  }
  
  let resultStr = '';
  while (newMatrix.length){
    resultStr += `${newMatrix[0]}\n`;
    newMatrix.shift();
  }
  return resultStr;
};

console.log(rotateTransform([
    [2, 4],
    [0, 0],
  ], 1));
console.log(rotateTransform([
      [2, 4],
      [0, 0]
    ], -1));