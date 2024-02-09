// Create a function that is a Hashtag Generator by using the following rules:

//     The output must start with a hashtag (#).
//     Each word in the output must have its first letter capitalized.
//     If the final result, a single string, is longer than 140 characters, the function should return false.
//     If either the input (str) or the result is an empty string, the function should return false.

// Examples

  // generateHashtag("    Hello     World   " ) ➞ "#HelloWorld"

  // generateHashtag("") ➞ false, "Expected an empty string to return false"

  // generateHashtag("Edabit Is Great") ➞ "#EdabitIsGreat", "Should remove spaces."

function generateHashtag(str){
  splitStr = str.split(" ")
  let words = [];
  let capitalized = [];
  for (element of splitStr){
    if (element === "" || element === " "){
      continue;
    } else {
      words.push(element);
    };
  }
  if (words.length === 0) return false;
  for (word of words){
    word = word.split('');
    word[0] = word[0].toUpperCase()
    word = word.join('');
    capitalized.push(word);
  };
  capitalized = "#" + capitalized.join('');
  if (capitalized.length > 140) return false;
  return capitalized;
};

console.log(generateHashtag("    Hello     World   " ));
console.log(generateHashtag(""));
console.log(generateHashtag("Edabit Is Great"));
console.log(generateHashtag("eda" + " ".repeat(140) + "bit"))
console.log(generateHashtag("Smmmmmmmmmmmmmmmmmmmmmmmmmmmmaaaaaaaaaaaaaaaaaaaaaaaaaaaaalllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll Dog"))
