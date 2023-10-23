// Given a list of words in the singular form, return a set of those words in the plural form 
// if they appear more than once in the list.

// Examples
//   pluralize(["cow", "pig", "cow", "cow"]) ➞ ["cows", "pig"]
//   pluralize(["table", "table", "table"]) ➞ ["tables"]
//   pluralize(["chair", "pencil", "arm"]) ➞ ["chair", "pencil", "arm"]

// Notes
//     This is an oversimplification of the English language so no edge cases will appear.
//     Only focus on whether or not to add an s to the ends of words.
//     All tests will be valid.

function pluralize(arr){
  const counted = {};
  let result = [];
  for (let i = 0; i < arr.length; i++){
    counted[arr[i]] = counted[arr[i]] + 1 || 1;
  };
  console.log(counted);
  for (let i = 0; i < Object.entries(counted).length; i++){
    console.log(Object.entries(counted)[i][1]);
    if (Object.entries(counted)[i][1] > 1){
      result.push(Object.entries(counted)[i][0] + 's');
    } else {
      result.push(Object.entries(counted)[i][0]);
    };
  };
  return result;
};

console.log(pluralize(["cow", "pig", "cow", "cow"]));
console.log(pluralize(["table", "table", "table"]));
console.log(pluralize(["chair", "pencil", "arm"]));
console.log(pluralize(["set", "set", "tuple", "tuple", "string", "string", "string", "string", "integer"]));