// Given two strings, s1 and s2, select only the characters in each string where the character in the 
// same position in the other string is in uppercase. Return these as a single string.

// To illustrate, given the strings s1 = "heLLo" and s2 = "GUlp", we select the letters "he" from s1, because 
// "G" and "U" are uppercase. We then select "lp" from s2, because "LL" is in uppercase. Finally, we join these together and return "help".

// Examples
//   selectLetters("heLLO", "GUlp") ➞ "help"
//   selectLetters("1234567", "XxXxX")  ➞ "135"
//   selectLetters("EVERYTHING", "SomeThings") ➞  "EYSomeThings"

// Notes
//     The strings don't have to be the same length.
//     Strings can contain non-alphabetic characters.

function selectLetters(s1, s2){
  let p1, p2;
  p1 = [...s1].filter((a, b) => /[A-Z]/.test(s2[b])).join('');
  p2 = [...s2].filter((a, b) => /[A-Z]/.test(s1[b])).join('');
  return p1 + p2;
};

console.log(selectLetters("heLLO", "GUlp"));
console.log(selectLetters("1234567", "XxXxX"));
console.log(selectLetters("EVERYTHING", "SomeThings"))