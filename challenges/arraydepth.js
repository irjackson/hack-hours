// Given an array, write a function to calculate it's depth. Assume that a normal array has a depth of 1.

// Examples
//   depth([1, 2, 3, 4]) ➞ 1
//   depth([1, [2, 3, 4]]) ➞ 2
//   depth([1, [2, [3, 4]]]) ➞ 3
//   depth([1, [2, [3, [4]]]]) ➞ 4

function depth(arr){
  if (!arr.some(Array.isArray)) return 1;
  return 1 + depth(arr.flat())
};

console.log(depth([1, 2, 3, 4]));
console.log(depth([1, [2, 3, 4]]));
console.log(depth([1, [2, [3, 4]]]));
console.log(depth([1, [2, [3, [4]]]]));
console.log(depth([1, [2, [3, [4]]], 4]))