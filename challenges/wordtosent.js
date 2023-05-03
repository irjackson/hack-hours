// Create a function that turns an array of words into a comma separated list, where the last word is separated by the word "and".

// Examples
//   wordsToSentence(["edabit"]) ➞ "edabit"
//   wordsToSentence(["Hello", "", "Bye"]) ➞ "Hello and Bye"
//   wordsToSentence(["Hello", "Bye", "See you soon"]) ➞ "Hello, Bye and See you soon"

// Notes
//   null values, empty arrays or arrays with only empty or null values should return an empty string (e.g. "").

function wordsToSentence(words){
  if (!words || words.length === 0 || words[0] === "") return "";
  if (words[0] && words.length === 1) return words[0];

  words = words.filter(word => word !== "");

  if (words.length === 2){
    return words.join(" and ");
  };

  let index = 1;
  let length = words.length;
  while (index < length - 1){
    words.splice(index, 0, ", ");
    length += 1;
    index += 2;
  };

  words.splice(words.length - 1, 0, " and ");
  return words.join('');
};

console.log(wordsToSentence(["edabit"]));
console.log(wordsToSentence(["Hello", "", "Bye"]));
console.log(wordsToSentence(["Hello", "Bye", "See you soon"]));