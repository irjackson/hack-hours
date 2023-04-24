// Rotate an array either left or right according to the number passed.

// You are an undercover agent and you're at a cocktail party hosted by an evil secret cartel. 
// You've snuck into the main office to look at the files. They are organized according to an index system. 
// You decide to rotate the files so that when the evil genius goes to get File 47: How to Make a Bomb he'll actually be grabbing 
// File 43: How to Make a Paper Mache Dinosaur. His attempt at making a bomb will fail and you will have saved many lives.

// Your challenge is to write a function that rotates an array by a given number, either left or right depending on 
// if the number is positive or negative.

// Arguments
//   Array: The array which will be rotated.
//   Number: The number of index positions the array will be rotated.
//   Returns Array: The rotated array.

// Examples
//   A positive number rotates it to the right:
//     rotateArray([0, 1, 2, 3, 4, 5, 7, 9], 2) ➞ [7, 9, 0, 1, 2, 3, 4, 5]
//   A negative number rotates it to the left:
//     rotateArray([0, 1, 2, 3, 4, 5, 7, 9], -2) ➞ [2, 3, 4, 5, 7, 9, 0, 1]
//   The number to rotate by can be longer than the array, it just loops over in that case:
//     rotateArray([0, 1, 2, 3, 4, 5, 7, 9], 12) ➞ [4, 5, 7, 9, 0, 1, 2, 3]

function rotateArray(array, number){
  if (number > 0){
    for (let i = number; i > 0; i--){
      array.unshift(array.pop());
    }
  } else {
    for (let i = number; i < 0; i++){
      array.push(array.shift());
    }
  }
  return array;
};

console.log(rotateArray([0, 1, 2, 3, 4, 5, 7, 9], 2));
console.log(rotateArray([0, 1, 2, 3, 4, 5, 7, 9], -2));
console.log(rotateArray([0, 1, 2, 3, 4, 5, 7, 9], 12));