// In linear algebra, the transpose of a matrix is an operator which flips a matrix over its diagonal; that is, it 
// switches the row and column indices of the matrix A by producing another matrix, often denoted by A^T.

// Create a function that takes a 2D array (matrix A) and returns a 2D array (matrix A^T).

// Examples
//   makeTranspose([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ]) ➞ [
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9]
//   ]

//   makeTranspose([
//     [1, 2],
//     [3, 4],
//     [5, 6]
//   ]) ➞ [
//     [1, 3, 5],
//     [2, 4, 6]
//   ]

//   makeTranspose([
//     ["a", "b"]
//   ]) ➞ [
//     ["a"],
//     ["b"]
//   ]

function makeTranspose(arr) {
  let rows = arr.length;
  let cols = arr[0].length;
  let transposed = [];
  for (let i = 0; i < cols; i++){
    transposed[i] = Array(rows);
  };

  for (let i = 0; i < rows; i++){
    for (let j = 0; j < cols; j++){
      transposed[j][i] = arr[i][j];
    };
  };
  return transposed;
};

console.log(makeTranspose([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]));

console.log(makeTranspose([
      [1, 2],
      [3, 4],
      [5, 6]
    ]));

console.log(makeTranspose([
      ["a", "b"]
    ]));