// You are given a dictionary of names and the amount of points they have. 
// Return a dictionary with the same names, but instead of points, return what prize they get.

// "Gold", "Silver", or "Bronze" to the 1st, 2nd and 3rd place respectively. 
// For all the other names, return "Participation" for the prize.

// Examples
//   awardPrizes({
//     "Joshua" : 45,
//     "Alex" : 39,
//     "Eric" : 43
//   }) ➞ {
//     "Joshua" : "Gold",
//     "Alex" : "Bronze",
//     "Eric" : "Silver"
//   }

//   awardPrizes({
//     "Person A" : 1,
//     "Person B" : 2,
//     "Person C" : 3,
//     "Person D" : 4,
//     "Person E" : 102
//   }) ➞ {
//     "Person A" : "Participation",
//     "Person B" : "Participation",
//     "Person C" : "Bronze",
//     "Person D" : "Silver",
//     "Person E" : "Gold"
//   }

//   awardPrizes({
//     "Mario" : 99,
//     "Luigi" : 100,
//     "Yoshi" : 299,
//     "Toad" : 2
//   }) ➞ {
//     "Mario" : "Bronze",
//     "Luigi" : "Silver",
//     "Yoshi" : "Gold",
//     "Toad" : "Participation"
//   }

// Notes
//     There will always be at least three participants to recieve awards.
//     No number of points will be the same amongst participants.

function awardPrizes(names){
  const medals = ['Gold', 'Silver', 'Bronze'];
  const ranking = Object.entries(names).sort((a, b) => b[1] - a[1]);
  const result = {};
  while (ranking.length){
    if (medals.length){
      result[ranking[0][0]] = medals[0];
      medals.shift();
    } else {
      result[ranking[0][0]] = 'Participation';
    }
    ranking.shift();
  };
  return result;
};

console.log(awardPrizes({
  "Joshua" : 45,
  "Alex" : 39,
  "Eric" : 43
}));

console.log(awardPrizes({
  "Person A" : 1,
  "Person B" : 2,
  "Person C" : 3,
  "Person D" : 4,
  "Person E" : 102
}));

console.log(awardPrizes({
  "Mario" : 99,
  "Luigi" : 100,
  "Yoshi" : 299,
  "Toad" : 2
}));