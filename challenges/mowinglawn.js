// Create a function that takes in an array of grass heights and a variable sequence of lawn mower cuts and outputs the array of successive grass heights.

// If after a cut, any single element in the array reaches zero or negative, return "Done" instead of the array of new heights.

// A demo:

// cuttingGrass([3, 4, 4, 4], 1, 1, 1) ➞ [[2, 3, 3, 3], [1, 2, 2, 2], "Done"]

// 1st cut shaves off 1: [3, 4, 4, 4] ➞ [2, 3, 3, 3]
// 2nd cut shaves off 1: [2, 3, 3, 3] ➞ [1, 2, 2, 2]
// 3rd cut shaves off 1: [1, 2, 2, 2] ➞ [0, 1, 1, 1], but one element reached zero so we return "Done".

// Examples

// cuttingGrass([5, 6, 7, 5], 1, 2, 1)
// ➞ [[4, 5, 6, 4], [2, 3, 4, 2], [1, 2, 3, 1]]

// cuttingGrass([4, 4, 4, 4], 1, 1, 1, 1)
// ➞ [[3, 3, 3, 3], [2, 2, 2, 2], [1, 1, 1, 1], "Done"]

// cuttingGrass([8, 9, 9, 8, 8], 2, 3, 2, 1)
// ➞ [[6, 7, 7, 6, 6], [3, 4, 4, 3, 3], [1, 2, 2, 1, 1], "Done"]

// cuttingGrass([1, 0, 1, 1], 1, 1, 1) ➞ ["Done", "Done", "Done"]

// Notes

//     The number of lawn cuts is variable.
//     There will be at least one cut.
//     Return "Done" onwards for each additional cut if the grass has already been completely mowed (see fourth example).

function cuttingGrass(arr, ...cuts){
  let report = [];
  let target = Math.min(...arr)
  let totalCuts = 0;
  for (let i = 0; i < cuts.length; i++){
    totalCuts += cuts[i];
    if (totalCuts >= target){
      report.push("Done");
    } else {
      arr = arr.map((x) => x - cuts[i]);
      report.push(arr);
    };
  };
  return report;
};

console.log(cuttingGrass([5,6,7,5],1,2,1));
console.log(cuttingGrass([4,4,4,4],1,1,1,1));
console.log(cuttingGrass([8,9,9,8,8],2,3,2,1));
console.log(cuttingGrass([1,0,1,1],1,1,1));