// The mode of a group of numbers is the value (or values) that occur most often (values have to occur more than once). 
// Given a sorted array of numbers, return an array of all modes in ascending order.

// Examples

//   mode([4, 5, 6, 6, 6, 7, 7, 9, 10]) ➞ [6]

//   mode([4, 5, 5, 6, 7, 8, 8, 9, 9]) ➞ [5, 8, 9]

//   mode([1, 2, 2, 3, 6, 6, 7, 9]) ➞ [2, 6]

// Notes
//   In this challenge, all group of numbers will have at least one mode.

function mode(nums) {
  const tally = {};
  let modes = [];
  nums.forEach(e => tally[e] = tally[e] + 1 | 1);
  let highest = 0;
  Object.entries(tally).forEach(e => {
    if (e[1] > highest) highest = e[1];
  })
  Object.entries(tally).forEach(e => {
    if (e[1] === highest) modes.push(Number(e[0]));
  });
  return modes;
};

console.log(mode([4, 5, 6, 6, 6, 7, 7, 9, 10]));
console.log(mode([4, 5, 5, 6, 7, 8, 8, 9, 9]));
console.log(mode([1, 2, 2, 3, 6, 6, 7, 9]));