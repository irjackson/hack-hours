// Given an input string, reverse the string word by word, the first word will be the last, and so on.
// Examples

// reverseWords(" the sky is blue") ➞ "blue is sky the"

// reverseWords("hello   world!  ") ➞ "world! hello"

// reverseWords("a good example") ➞ "example good a"

// Notes
//   A word is defined as a sequence of non-space characters.
//   The input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
//   You need to reduce multiple spaces between two words to a single space in the reversed string.
//   Try to solve this in linear time. 

function reverseWords(string){
  let curr = [];
  let reversed = [];
  for (let i = 0; i <= string.length; i++){
    if (curr == ' '){
      curr = [];
    };
    if(string[i] === ' ' && curr.length > 0 || string[i] === undefined){
      if(curr == ''){
        return reversed.join(' ');
      };
      reversed.unshift(curr.join(''));
      curr = [];
    };
    if (string[i] === undefined){
      return reversed.join(' ');
    }; 
    curr.push(string[i]);
  };
};

console.log(reverseWords(" the sky is blue"));
console.log(reverseWords("hello   world!  "));
console.log(reverseWords("a good example"));