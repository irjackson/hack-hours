// Write a function that sorts the positive numbers in ascending order, and keeps the negative numbers untouched.

// Examples

//   posNegSort([6, 3, -2, 5, -8, 2, -2]) ➞ [2, 3, -2, 5, -8, 6, -2]
//   posNegSort([6, 5, 4, -1, 3, 2, -1, 1]) ➞ [1, 2, 3, -1, 4, 5, -1, 6]
//   posNegSort([-5, -5, -5, -5, 7, -5]) ➞ [-5, -5, -5, -5, 7, -5]
//   posNegSort([]) ➞ []

// Notes

//     If given an empty array, you should return an empty array.
//     Integers will always be either positive or negative (0 isn't included in the tests).

function posNegSort(arr){
  if (!arr) return arr;
  let sortedNums = arr.filter(a => a > 0).sort();
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0) arr[i] = sortedNums.shift();
  };
  return arr;
};

console.log(posNegSort([6, 3, -2, 5, -8, 2, -2]));
console.log(posNegSort([6, 5, 4, -1, 3, 2, -1, 1]));
console.log(posNegSort([-5, -5, -5, -5, 7, -5]));
console.log(posNegSort([]));