// Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.

//     Return a boolean value (true or false).
//     Return true if the amount of x's and o's are the same.
//     Return false if they aren't the same amount.
//     The string can contain any character.
//     When "x" and "o" are not in the string, return true.

// Examples
    // XO("ooxx") ➞ true
    // XO("xooxx") ➞ false
    // XO("ooxXm") ➞ true
      // Case insensitive.
    // XO("zpzpzpp") ➞ true
      // Returns true if no x and o.
    // XO("zzoo") ➞ false

function XO(str){
  let xCount = 0;
  let oCount = 0;
  let input = str.split('')
  for (let i = 0; i < input.length; i++){
    if (input[i].toLowerCase() === 'x'){
      xCount++;
    }
    if (input[i].toLowerCase() === 'o'){
      oCount++;
    }
  }
  if (oCount === 0 && xCount === 0) return true;
  return xCount === oCount;
};

console.log(XO('ooxx'));
console.log(XO('xooxx'));
console.log(XO('zpzpzpp'));
console.log(XO('zzoo'));