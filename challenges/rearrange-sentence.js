// Given a sentence with numbers representing a word's location embedded within each word, return the sorted sentence.

// Examples
//   rearrange("is2 Thi1s T4est 3a") ➞ "This is a Test"

//   rearrange("4of Fo1r pe6ople g3ood th5e the2") ➞ "For the good of the people"

//   rearrange(" ") ➞ ""

// Notes
//   Only the integers 1-9 will be used.

function rearrange(sentence){
  if (!sentence || sentence === " ") return "";
  let wordList = sentence.split(" ");
  let sortedSentence = Array(wordList.length);
  for (word of wordList){
    for (let i = 0; i < word.length; i++){
      if (Number(word[i])){
        let removedNum = word.replace(/\d/g, '')
        console.log(removedNum);
        sortedSentence[Number(word[i])-1] = removedNum;
        break;
      };
    };
  };
  return sortedSentence.join(" ");
};

console.log(rearrange("is2 Thi1s T4est 3a"));
console.log(rearrange(" "));