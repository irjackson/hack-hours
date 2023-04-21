// Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.

// Examples
  // isAnagram("cristian", "Cristina") ➞ true
  // isAnagram("Dave Barry", "Ray Adverb") ➞ true
  // isAnagram("Nope", "Note") ➞ false

// Notes
  // Should be case insensitive.
  // The two given strings can be of different lengths.

function isAnagram(str1, str2){
  let sort1 = str1.toLowerCase().split('').sort().join('');
  let sort2 = str2.toLowerCase().split('').sort().join('');
  console.log(sort1);
  console.log(sort2)
  return sort1 === sort2;
};

console.log(isAnagram("cristian", "Cristina"));
console.log(isAnagram("Dave Barry", "Ray Adverb"));
console.log(isAnagram("Nope", "Note"));