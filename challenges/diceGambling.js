// Create a function that takes an array consisting of dice rolls from 1-6. Return the sum of your rolls with the following conditions:

//     If a 1 is rolled, that is bad luck. The next roll counts as 0.
//     If a 6 is rolled, that is good luck. The next roll is multiplied by 2.
//     The array length will always be 3 or higher.

// Examples

// rolls([1, 2, 3]) ➞ 4
// The second roll, 2, counts as 0 as a result of rolling 1.

// rolls([2, 6, 2, 5]) ➞ 17
// The 2 following the 6 was multiplied by 2.

// rolls([6, 1, 1]) ➞ 8
// The first roll makes the second roll worth 2, but the
// second roll was still 1 so the third roll doesn't count.

// Notes

// Even if a 6 is rolled after a 1, 6 isn't summed but the 6's "effect" still takes place.

function rolls(arr){
  let goodLuck = false;
  let badLuck = false;
  let result = 0;
  for (let i = 0; i < arr.length; i++){
    if (goodLuck){
      result += arr[i] * 2;
      if (arr[i] !== 6){
        goodLuck = !goodLuck;
      };
      if (arr[i] === 1){
        badLuck = !badLuck;
      }
      continue;
    };
    if (badLuck){
      if (arr[i] !== 1){
        badLuck = !badLuck;
      };
      if (arr[i] === 6){
        goodLuck = !goodLuck;
      }
      continue;
    };
    if (arr[i] === 1){
      badLuck = !badLuck;
    };
    if (arr[i] === 6){
      goodLuck = !goodLuck;
    };
    result += arr[i];
  };

  return result;
};

console.log(rolls([1, 2, 3]));
console.log(rolls([2, 6, 2, 5]));
console.log(rolls([6, 1, 1]));
console.log(rolls([6, 6, 6]));
console.log(rolls([1, 1, 1 ,1, 1]));