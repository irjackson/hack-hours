// Write a function that takes two arrays (arr1 and arr2) and an int n, and returns true if the 
// second array is equal to the first array shifted by n positions. Otherwise, return false.

// Examples

//   circularShift([1, 2, 3, 4], [3, 4, 1, 2], 2) ➞ true

//   circularShift([1, 1], [1, 1], 6) ➞ true

//   circularShift([0, 1, 2, 3, 4, 5], [3, 4, 5, 2, 1, 0], 3) ➞ false

// Notes

//     The two arrays will be of the same length.
//     n can be a negative value.

function circularShift(arr1, arr2, n){
  for (let i = 0; i < n; i++){
    arr2.push(arr2.shift());
  };
  return arr2.every((el, i) => {
    return el === arr1[i];
  });
};

console.log(circularShift([1, 2, 3, 4], [3, 4, 1, 2], 2));
console.log(circularShift([1, 1], [1, 1], 6));
console.log(circularShift([0, 1, 2, 3, 4, 5], [3, 4, 5, 2, 1, 0], 3));