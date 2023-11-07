// Create a function that takes three arrays and returns one array where all passed arrays are combined into nested arrays.

// These arrays should be combined based on indexes: the first nested array should contain only the items on index 0, 
// the second array on index 1, and so on.

// If any array contains fewer items than necessary, supplement the missing item with "*".

// Examples
// combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"]) ➞ [[false, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

// combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]) ➞ [[1, 4, 7], [2, 5,  8], [3, 6, 9]]

// combineArrays(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick", "Raymond", "Riri"]) ➞ [["Jack", "Stuart", "Rick"], ["Joe", "Sammy",  "Raymond"], ["Jill", "Silvia", "Riri"]]

function combineArray(...args){
  let result = [];
  let index = 0;
  while (index < args.length){
    let newEntry = [];
    for (let i = 0; i < args.length; i++){
      if (args[i][index] === undefined){
        newEntry.push('*');
        continue;
      };
      newEntry.push(args[i][index]);
    };
    result.push(newEntry);
    index += 1;
  };
  return result;
};

console.log(combineArray([false, "false"], ["true", true, "bool"], ["null", "undefined"]));
console.log(combineArray([1, 2, 3], [4, 5, 6], [7, 8, 9]));
console.log(combineArray(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick", "Raymond", "Riri"]));