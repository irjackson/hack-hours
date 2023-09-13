// Create a function that determines whether or not a player is holding a Full House in their hand. 
// A hand is represented as an array of 5 cards. A full house is defined as a pair of cards and a three-of-a-kind.

// To illustrate: ["A", "A", "A", "K", "K"] would be a Full House, since the player holds 3 aces and 2 kings.

// Examples
//   isFullHouse(["A", "A", "A", "K", "K"]) ➞ true
//   isFullHouse(["3", "J", "J", "3", "3"]) ➞ true
//   isFullHouse(["10", "J", "10", "10", "10"]) ➞ false
//   isFullHouse(["7", "J", "3", "4", "2"]) ➞ false

function isFullHouse(hand){
  let tally = {};
  for (let i = 0; i < hand.length; i++){
    tally[hand[i]] = tally[hand[i]]+ 1 || 1;
  };
  return Object.values(tally).includes(2) && Object.values(tally).includes(3);
};

console.log(isFullHouse(["A", "A", "A", "K", "K"]));
console.log(isFullHouse(["3", "J", "J", "3", "3"]));
console.log(isFullHouse(["10", "J", "10", "10", "10"]));
console.log(isFullHouse(["7", "J", "3", "4", "2"]));