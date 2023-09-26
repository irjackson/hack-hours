// Create a function that takes an amount of monetary change (e.g. 47 cents) and breaks down the most efficient way that 
// hange can be made using USD quarters, dimes, nickels and pennies. Your function should return an object.

// Coin	Value
// Penny	0.01
// Nickel	0.05
// Dime	0.10
// Quarter	0.25

// Examples

//   makeChange(47) ➞ { "q": 1, "d": 2, "n": 0, "p": 2 }

//   makeChange(24) ➞ { "q": 0, "d": 2, "n": 0, "p": 4 }

//   makeChange(92) ➞ { "q": 3, "d": 1, "n": 1, "p": 2 }

// Notes 
//   Amount given will always be less than 100 and more than 0.

function makeChange(c){
  const change = {
    "q": 0,
    "d": 0,
    "n": 0,
    "p": 0
  };
  while (c > 0){
    if (c > 25){
      change["q"] += 1;
      c -= 25;
    }
    else if (c <= 25 && c > 10){
      change["d"] += 1;
      c -= 10;
    }
    else if (c <= 10 && c > 5){
      change["n"] += 1;
      c -= 5;
    }
    else if (c < 5){
      change["p"] += 1;
      c -= 1;
    }
  }
  console.log(change);
  return change;
};

console.log(makeChange(47));
console.log(makeChange(24));
console.log(makeChange(92));