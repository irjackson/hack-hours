// Reverse and return an array in-place. Do not create a new array in memory.
// Instead, modify the array as given. Do not use the array reverse method built in
// to the array prototype while solving the problem.


function reverseArray(arr){
  for (let i = 0, j = arr.length - 1; i < j; i++, j--){
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
console.log(reverseArray([1,2,3,4,5]));

/*

Extension: (recommended to solve reverseArray first)

Given a string as a sentence "bob likes dogs alot" return the word reversal
"alot dogs likes bob". Do not use the array reverse method built in to the array
prototype.

The input string will always be a series of words separated by spaces between
them, with each word containing only lowercase letters and no punctuation. The
input string will always have at least one word

*/

const reverseSentence = sentence => {
  let reversed = [];
  let currWord = [];
  for (let i = 0; i <= sentence.length; i++){
    if(sentence[i] === undefined){
      reversed.unshift(currWord.join(''))
      return reversed.join(' ');
    }
    if(sentence[i] === ' '){
      reversed.unshift(currWord.join(''))
      currWord = [];
    }
    console.log(currWord)
    currWord.push(sentence[i])
  }
};

console.log(reverseSentence('bob likes dogs alot'));