// Write a function that returns the closest chapter to the current page you are at. If two chapters are 
// similarly close, return whichever has the higher page.

// Examples
//   closestToPage({
//     "Chapter 1" : 1,
//     "Chapter 2" : 15,
//     "Chapter 3" : 37
//   }, 10) ➞ "Chapter 2"


//   closestToPage({
//     "New Beginnings" : 1,
//     "Strange Developments" : 62,
//     "The End?" : 194,
//     "The True Ending" : 460
//   }, 200) ➞ "The End?"


//   closestToPage({
//     "Chapter 1a" : 1,
//     "Chapter 1b" : 5
//   }, 3) ➞ "Chapter 1b"

// Notes
//   All page numbers in the book are valid integers.

function closestToPage(chapters, page){
  let keys = Object.keys(chapters);
  let distances = Object.values(chapters).map(x => Math.abs(x - page));
  return keys[distances.lastIndexOf(Math.min(...distances))];
};

console.log(closestToPage({
      "Chapter 1" : 1,
      "Chapter 2" : 15,
      "Chapter 3" : 37
    }, 10));

console.log(closestToPage({
      "New Beginnings" : 1,
      "Strange Developments" : 62,
      "The End?" : 194,
      "The True Ending" : 460
    }, 200));

console.log(closestToPage({
      "Chapter 1a" : 1,
      "Chapter 1b" : 5
    }, 3));

console.log(closestToPage({
      "Chapter 1a" : 1, 
      "Chapter 1b" : 5, 
      "Chapter 1c" : 50, 
      "Chapter 1d" : 100
    }, 75));