// Create a function that identifies the very first item that has recurred in the string argument passed. 
// It returns the identified item with the index where it first appeared and the very next index where it 
// resurfaced -- entirely as an object; or as an empty object if the passed argument is either null, undefined, empty string, or 
// no recurring item exists.

// Examples
  // recurIndex("DXTDXTXDTXD") ➞ {"D": [0, 3]}
    // D first appeared at index 0, resurfaced at index 3
    // T appeared and resurfaced at indices 3 and 6 but D completed the cycle first

  // recurIndex("YXZXYTUVXWV") ➞ {"X": [1, 3]}

  // recurIndex("YZTTZMNERXE") ➞ {"T": [2, 3]}

  // recurIndex("AREDCBSDERD") ➞ {"D": [3, 7]}

  // recurIndex("") ➞ {}

  // recurIndex(null) ➞ {}

function recurIndex(str, history = {}, index = 0){
  // base case
  if (str[index] === undefined || str === "" || str === null) return {}
  if (history.hasOwnProperty(str[index])) return [history[str[index]], index];
  //recursive case
  history[str[index]] = index;
  return recurIndex(str, history, index + 1);
};

console.log(recurIndex("DXTDXTXDTXD"));
console.log(recurIndex("YXZXYTUVXWV"));
console.log(recurIndex("YZTTZMNERXE"));
console.log(recurIndex("AREDCBSDERD"));