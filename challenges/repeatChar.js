// In this challenge you should repeat a specific given char x times. 
// Create a function that takes a string and a number as arguments and return a string.

// Examples
//   repeat("-", 3) ➞ "---"
//   repeat("A", 0) ➞ ""
//   repeat("c", -1) ➞ ""

// Notes
//     Tests can repeat a char 268435440 times, no more.
//     Repeat should be fast maximum execution time : 5 ms.
//     Total maximum execution time : 3800 ms.
//     Native repeat is forbidden.
//     Using of an existing repeat polyfill too (that's not the challenge objective).

function repeat(str, nb){
  if (nb <= 0) return '';
  if (str.length === nb) return str;
  return repeat(str += str[0], nb);
};

console.log(repeat("-", 3));
console.log(repeat("A", 0));
console.log(repeat("c", -1));