// Create a function that converts a string into a matrix of characters that can be read vertically. 
// Add spaces when characters are missing.

// Examples
//   verticalText("Holy bananas") ➞ [
//     ["H", "b"],
//     ["o", "a"],
//     ["l", "n"],
//     ["y", "a"],
//     [" ", "n"],
//     [" ", "a"],
//     [" ", "s"]
//   ]

//   verticalText("Hello fellas") ➞ [
//     ["H", "f"],
//     ["e", "e"],
//     ["l", "l"],
//     ["l", "l"],
//     ["o", "a"],
//     [" ", "s"]
//   ]

function verticalText(str){
  str = str.split(" ");
  let longest = 0;
  let verticalized = [];
  str.forEach((word) => {
    if (word.length > longest) longest = word.length;
  });
  for (let i = 0; i < longest; i++){
    let newRow = [];
    let index = 0;
    while (newRow.length < str.length){
      if (str[index][i]){
        newRow.push(str[index][i]);
      } else {
        newRow.push(" ");
      };
      index++;
    };
    verticalized.push(newRow);
  };
  return verticalized;
};

console.log(verticalText("Holy bananas"));
console.log(verticalText("Hello fellas"));
