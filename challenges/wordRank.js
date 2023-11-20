// Create a function that takes a string of words and returns the highest scoring word. 
// Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.

// Examples
//   wordRank("The quick brown fox.") ➞ "brown"
//   wordRank("Nancy is very pretty.") ➞ "pretty"
//   wordRank("Check back tomorrow, man!") ➞ "tomorrow"
//   wordRank("Wednesday is hump day.") ➞ "Wednesday"

// Notes
//     If two words score the same, return the word that appears first in the original string.
//     The returned string should only contain alphabetic characters (a-z).
//     Preserve case in the returned string (see 4th example above).

function wordRank(str){
  const score = {};
  str = str.replaceAll(/[.,:;'?]/g, '').split(' ');
  str.forEach(word => {
    score[word] = 0;
    word.split('').forEach(letter => {
      score[word] += letter.charCodeAt(letter);
    });
  });
  let finalScore = Object.entries(score);
  let highest = [finalScore[0][0], finalScore[0][1]];
  finalScore.forEach(word => {
    if (word[1] > highest[1]){
      highest[0] = word[0];
      highest[1] = word[1];
    };
  });
  return highest[0];
};

console.log(wordRank("The quick brown fox."));
console.log(wordRank("Nancy is very pretty."));
console.log(wordRank("Check back tomorrow, man!"));
console.log(wordRank("Wednesday is hump day."));