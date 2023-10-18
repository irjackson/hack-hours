// Greed is a dice game played with five six-sided dice. Your mission is to score a throw according to these rules:

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point

// See the below examples for a better understanding:

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

// Create a function that takes an array of five six-sided throw values and returns the final calculated dice score.

// Examples
//   diceScore([2, 3, 4, 6, 2]) ➞ 0
//   diceScore([4, 4, 4, 3, 3]) ➞ 400
//   diceScore([2, 4, 4, 5, 4]) ➞ 450

// Notes
//   A single dice can only be counted once in each roll. For example, a given "5" can only be counted as 
//   a part of the triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

function diceScore(throws){
  let totalPoints = 0;
  let checked = new Set;
  const points = {
    '1111': 1100,
    '111': 1000,
    '222': 200,
    '2222': 200,
    '333': 300,
    '3333': 300,
    '444': 400,
    '4444': 400,
    '555': 500,
    '5555': 550,
    '666': 600,
    '6666': 600,
    '11': 200,
    '1': 100,
    '55': 100,
    '5': 50
  };
  for (let i = 0; i < throws.length; i++){
    if (!checked.has(throws[i])){
      let rolledNums = throws.filter((num) => num === throws[i]);
      rolledNums = rolledNums.join('');
      totalPoints += points[rolledNums] || 0;
    };
    checked.add(throws[i]);
  };
  return totalPoints;
};

console.log(diceScore([5,1,3,4,1]));
console.log(diceScore([1,1,1,3,1]));
console.log(diceScore([2,4,4,5,4]));
console.log(diceScore([2,3,4,6,2]));
console.log(diceScore([4,4,4,3,3]));