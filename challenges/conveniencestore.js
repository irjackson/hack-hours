//Given a total due and an array representing the amount of change in your pocket, determine whether or not you are 
// able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies 
// gives you 6.25 + 2 + .25 + 0 = 8.50.

//Examples:
// changeEnough([2, 100, 0, 0], 14.11) ➞ false
// changeEnough([0, 0, 20, 5], 0.75) ➞ true
// changeEnough([30, 40, 20, 5], 12.55) ➞ true

// quarter: 25 cents / $0.25
// dime: 10 cents / $0.10
// nickel: 5 cents / $0.05
// penny: 1 cent / $0.01

function changeEnough(pocket, totalDue){
  let coinTotal = 0;
  for (let i = 0; i < pocket.length; i++){
    switch (i){
      case 0:
        coinTotal += (.25 * pocket[i]);
        break;
      case 1:
        coinTotal += (.10 * pocket[i]);
        break;
      case 2:
        coinTotal += (.05 * pocket[i]);
        break;
      case 3:
        coinTotal += (.01 * pocket[i]);
        break;
    }
  }
  return coinTotal >= totalDue;
};

console.log(changeEnough([2, 100, 0, 0], 14.11));
console.log(changeEnough([0, 0, 20, 5], 0.75));
console.log(changeEnough([30, 40, 20, 5], 12.55));
