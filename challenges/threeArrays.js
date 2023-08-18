// Given three arrays of integers: arr1, arr2, arr3, return the sum of integers which are common in all three arrays.

// Examples
// sumCommon([1, 2, 3], [5, 3, 2], [7, 3, 2]) ➞ 5
  // 2 & 3 are common in all 3 arrays.
// sumCommon([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]) ➞ 7
  // 2, 2 & 3 are common in all 3 arrays.
// sumCommon([1], [1], [2]) ➞ 0

// Notes
//   N/A

function sumCommon(arr1, arr2, arr3){
	let commonNums = [];
	 arr1.map((el) => {
      if(arr2.includes(el) && arr3.includes(el)) {
        return commonNums.push(el);
      };
		});
  return commonNums.reduce((acc, curr) => acc + curr, 0)
};

console.log(sumCommon([1, 2, 3], [5, 3, 2], [7, 3, 2]));
console.log(sumCommon([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]));
console.log(sumCommon([1], [1], [2]));