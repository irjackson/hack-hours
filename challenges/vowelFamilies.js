// Write a function that selects all words that have all the same vowels (in any order and/or number) as the first 
// word, including the first word.

// Examples

// sameVowelGroup(["toe", "ocelot", "maniac"]) ➞ ["toe", "ocelot"]

// sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]) ➞ ["many"]

// sameVowelGroup(["hoops", "chuff", "bot", "bottom"]) ➞ ["hoops", "bot", "bottom"]

// Notes

//     Words will contain only lowercase letters, and may contain whitespaces.
//     Frequency does not matter (e.g. if the first word is "loopy", then you can include 
//       words with any number of o's, so long as they only contain o's, and not any other vowels).

function sameVowelGroup(arr) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowelList = {};

  for (let i = 0; i < arr.length; i++){
    for (let letter of arr[i]){
      if (vowels.includes(letter)){
        if (!vowelList[`${arr[i]}`]){
          vowelList[`${arr[i]}`] = [letter]
        } else {
          vowelList[`${arr[i]}`].push(letter);
        };
      };
    };
  };
  for (let prop of Object.entries(vowelList)){
    console.log(prop);
  }
};

console.log(sameVowelGroup(["toe", "ocelot", "maniac"]));
