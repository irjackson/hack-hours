// Create a function that takes one, two or more numbers as arguments and adds them together to get a new number. 
// The function then repeatedly multiplies the digits of the new number by each other, yielding a new number, until the product 
// is only 1 digit long. Return the final product.

// Examples
//   sumDigProd(16, 28) ➞ 6
  // 16 + 28 = 44
  // 4 * 4 =  16
  // 1 * 6 = 6

//   sumDigProd(0) ➞ 0

//   sumDigProd(1, 2, 3, 4, 5, 6) ➞ 2

// Notes
// The input of the function is at least one number.

function sumDigProd(...nums){
  nums = nums.reduce((result, curr) => result + curr);
  while (String(nums).length > 1){
    nums = [...String(nums)].reduce((result, curr) => result * curr);
  };
  return nums;
};

console.log(sumDigProd(16, 28));
console.log(sumDigProd(0));
console.log(sumDigProd(1, 2, 3, 4, 5, 6));