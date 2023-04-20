// Mubashir needs your help in a simple task. Create a function which takes two positive integers a and b. 
// These numbers are simultaneously decreased by 1 until the smaller one reaches 0.

// During this process, the greater number can be divisible by the smaller one. Your task is to count how many times it will happen.

// Examples
//   simpleCheck(3, 5) ➞ 2
//   simpleCheck(8, 4) ➞ 3
//   simpleCheck(54, 17) ➞ 1

function simpleCheck(a, b, result = 0){
  if (a === 0 || b === 0) return result;
  if (a > b && a % b === 0) result++;
  if (b > a && b % a === 0) result++;
  return simpleCheck(--a, --b, result);
};

console.log(simpleCheck(3, 5));
console.log(simpleCheck(8, 4));