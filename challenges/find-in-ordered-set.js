/*
Write a function findInOrderedSet that determines if a target value exists within an array of numbers.

Assuming that the array is sorted in ascending order, can you accomplish this with time complexity better than O(n)?

ex:
const nums = [-3, 0, 8, 13, 37]
findInOrderedSet(nums, 0);  -> true
findInOrderedSet(nums, 2);  -> false
*/

const findInOrderedSet = (array, target) => {
  return array.filter(el => el==target).length ? true: false;
};
const nums = [-3, 0, 8, 13, 37];
console.log(findInOrderedSet(nums, 0));

/*
Extension:

Write a function findIn2dMatrix that determines if a target value exists within a two dimensional matrix.
The matrix has the following properties:
  - Each subarray in the matrix contains numbers sorted in ascending order
  - The *last* element in each subarray is smaller than than the *first* element in each following subarray  

ex:
const matrix = [
  [-3, -1,  2,  4,  5],
  [ 6,  7,  8, 13, 37],
  [41, 49, 50, 61, 75]
];
findIn2dMatrix(matrix, 13); -> true
findIn2dMatrix(matrix, 42); -> false

*/

const findIn2dMatrix = (matrix, target) => {
  let output = false;
  for(let i = 0; i < matrix.length; i++){
    if(matrix[i].filter(el => el==target).length){
      output = true;
    }
  }
  return output;
};

const matrix = [
  [-3, -1,  2,  4,  5],
  [ 6,  7,  8, 13, 37],
  [41, 49, 50, 61, 75]
];

console.log(findIn2dMatrix(matrix, 13));
console.log(findIn2dMatrix(matrix, 42));

module.exports = { findInOrderedSet, findIn2dMatrix };
