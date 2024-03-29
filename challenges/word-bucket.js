// Write a function that divides a phrase into word buckets, with each bucket containing n or fewer characters. 
// Only include full words inside each bucket.

// Examples

// bucketize("she sells sea shells by the sea", 10)
// ➞ ["she sells", "sea shells", "by the sea"]

// bucketize("the mouse jumped over the cheese", 7)
// ➞ ["the", "mouse", "jumped", "over", "the", "cheese"]

// bucketize("fairy dust coated the air", 20)
// ➞ ["fairy dust coated", "the air"]

// bucketize("a b c d e", 2)
// ➞ ["a", "b", "c", "d", "e"]

// Notes

//     Spaces count as one character.
//     Trim beginning and end spaces for each word bucket (see final example).
//     If buckets are too small to hold a single word, return an empty array: []
//     The final goal isn't to return just the words with a length equal (or lower) to the given n, but to 
//     return the entire given phrase bucketized (if possible). So, for the specific case of "by" the only 
//     word with a proper length, the phrase can't be bucketized, and the returned array has to be empty.

function bucketize(phrase, n){
  let bucket = [];
  let segment = "";
  for (let word of phrase.split(" ")){
    if (word.length > n){
      return [];
    };
    if (word.length + segment.length < n){
      if (segment.length){
        segment += " ";
      };
      segment += word;
    } else {
      if (segment.length){
        bucket.push(segment);
      };
      segment = word;
    };
  };
  bucket.push(segment);
  return bucket;
};

console.log(bucketize("she sells sea shells by the sea", 10));
console.log(bucketize("the mouse jumped over the cheese", 7));
console.log(bucketize("fairy dust coated the air", 20));
console.log(bucketize("a b c d e", 2));