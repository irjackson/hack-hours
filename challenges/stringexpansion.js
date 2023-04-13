// Create a function which takes a string txt and expands it as per following rules:

//     The numeric values represent the occurrence of each letter preceding that numeric value.

// stringExpansion("3M2u5b2a1s1h2i1r") ➞ "MMMuubbbbbaashiir"

//     The first occurrence of a numeric value should be the number of times each character behind it is repeated, 
//     until the next numeric value appears.

// stringExpansion("3Mat")➞ "MMMaaattt"      // correct

// stringExpansion("3Mat") ➞ "MMMat"          // wrong
// stringExpansion("3Mat") ➞ "MatMatMat"      // wrong

//     If there are consecutive numeric characters, ignore them all except last one.

// stringExpansion("3M123u42b12a") ➞ "MMMuuubbaa"

//     If there are two consecutive alphabetic characters then the string will remain unchanged.

// stringExpansion("airforce") ➞ "airforce"

//     Empty strings should return an empty string.

// stringExpansion("") ➞ ""

function stringExpansion(txt) {
  let expander = txt.split('');
  let result = [];
  let repeater;
  for (let i = 0; i < expander.length; i++){
    if (!isNaN(expander[i])){
      repeater = parseInt(expander[i]);
      continue;
    };
    let currCount = repeater;
    while (currCount > 0){
      result.push(expander[i])
      currCount--;
    }
  }
  if (result.length === 0) return txt;
  return result.join('');
};

console.log(stringExpansion("3Mat"));
console.log(stringExpansion("3M2u5b2a1s1h2i1r"));
console.log(stringExpansion("3M123u42b12a"));
console.log(stringExpansion(""));
console.log(stringExpansion("airforce"));

