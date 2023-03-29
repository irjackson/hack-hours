// Let's say that there exists a machine that gives out free coins, but with a twist!

// Separating two people is a wall, and this machine is placed in such a way that both people are able to access it. 
// Spending a coin in this machine will give the person on the other side 3 coins and vice versa.

// If both people continually spend coins for each other (SHARING), then they'll both gain a net profit of 2 coins per turn. 
// However, there is always the possibility for someone to act selfishly (STEALING): they spend no coins, yet they still receive 
// the generous 3 coin gift from the other person!

// Here's an example of Red taking advantage of Green! Red chose to betray

// The Challenge
// Assuming that both people start with 3 coins each, create a function that calculates both people's final number of coins. 
// You will be given two arrays of strings, with each string being the words "share" or "steal".

// Examples
// getCoinBalances(["share"], ["share"]) ➞ [5, 5]
  // Both people spend one coin, and receive 3 coins each.
// getCoinBalances(["steal"], ["share"]) ➞ [6, 2]
  // Person 1 gains 3 coins, while person 2 loses a coin.
// getCoinBalances(["steal"], ["steal"]) ➞ [3, 3]
  // Neither person spends any coins and so no one gets rewarded.
// getCoinBalances(["share", "share", "share"], ["steal", "share", "steal"]) ➞ [3, 11]

// Notes
//   No tests will include a negative number of coins.
//   All words will be given in lowercase.

function getCoinBalances(arr1, arr2, p1 = 3, p2 = 3) {
  if (arr1.length === 0 && arr2.length === 0) return [p1, p2];
  if (arr1[0] === 'share'){
    p1 -= 1;
    p2 += 3;
  };
  if (arr2[0] === 'share'){
    p1 += 3;
    p2 -= 1;
  };
  arr1.shift();
  arr2.shift();
  return getCoinBalances(arr1, arr2, p1, p2);
};

console.log(getCoinBalances(["share"], ["share"]));
console.log(getCoinBalances(["steal"], ["share"]));
console.log(getCoinBalances(["steal"], ["steal"]));
console.log(getCoinBalances(["share", "share", "share"], ["steal", "share", "steal"]));