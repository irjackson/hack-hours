// Mubashir was walking through a straight street with exactly n identical houses on both sides. 
// House numbers in the street look like this:

// 1 |   | 6

// 3 |   | 4

// 5 |   | 2

// He noticed that Even numbered houses increase on the right while Odd numbered houses decrease on the left.

// Create a function that takes a house number house and length of the street n and returns the house number on the opposite side.

// Examples
//   oppositeHouse(1, 3) ➞ 6
//   oppositeHouse(2, 3) ➞ 5
//   oppositeHouse(3, 5) ➞ 8

function oppositeHouse(h, n){
  return n * 2 + 1 - h;
};

console.log(oppositeHouse(1, 3));
console.log(oppositeHouse(2, 3));
console.log(oppositeHouse(3, 5));