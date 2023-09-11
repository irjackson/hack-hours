// Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. 
// If multiple words tie for the same length, retrieve the word that occurs first.

// Examples
// getHashTags("How the Avocado Became the Fruit of the Global Trade")
//   ➞ ["#avocado", "#became", "#global"]
// getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
//   ➞ ["#christmas", "#probably", "#will"]
// getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
//   ➞ ["#surprise", "#parents", "#fruit"]
// getHashTags("Visualizing Science")
//   ➞ ["#visualizing", "#science"]

// Notes
//     If the title is less than 3 words, just order the words in the title by length in descending order (see example #4).
//     Punctuation does not count towards a word's length.

function getHashTags(str){
  let splitWords = str.split(' ');
  for (let i = 0; i < splitWords.length; i++){
    if (splitWords[i][splitWords[i].length - 1].match(/[^a-zA-Z]+/g)){
      splitWords[i] = splitWords[i].slice(0, -1);
    };
  };
  splitWords.sort((a, b) => {
    if (a.length > b.length) return -1
    else if (a.length < b.length) return 1
  });
  let result = [];
  for (let i = 0; i < 3; i++){
    if (splitWords[i] === undefined) continue;
    splitWords[i] = `#${splitWords[i]}`.toLowerCase();
    result.push(splitWords[i]);
  };
  return result;
};

console.log(getHashTags("How the Avocado Became the Fruit of the Global Trade"));
console.log(getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year"));
console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"));
console.log(getHashTags("Visualizing Science"));