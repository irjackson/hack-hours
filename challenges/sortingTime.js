// JavaScript has a beautiful built-in function sort that sorts an iterable, usually an array of numbers, 
// sorting them in ascending order, but using a block you can sort the iterable in different ways.

// Create a function that takes an array of integers as an argument and returns the same array in ascending order. 
// Using sort() would be easy, but for this challenge YOU have to sort the array creating your own algorithm.
// Examples

// sortArray([2, -5, 1, 4, 7, 8]) ➞ [-5, 1, 2, 4, 7, 8]

// sortArray([23, 15, 34, 17, -28]) ➞ [-28, 15, 17, 23, 34]

// sortArray([38, 57, 45, 18, 47, 39]) ➞ [18, 38, 39, 45, 47, 57]

// Notes

//     The arrays can contain either positive or negative elements.
//     The arrays will only contain integers.
//     The arrays won't contain duplicate numbers.
//     This is a challenge to enhance your ability, using the sort built-in won't enhance your skills.

function sortArray(array, result = []){
  let lowest = array[0];
  let counter = array.length;
  while(counter > 0){
    for (let i = 0; i < array.length; i++){
      console.log(lowest);
      if (array[i] < array[i+1] && array[i] < lowest){
        lowest = array[i];
      };
    };
    counter -= 1;
    result.push(lowest)
  }
  return result;
};

console.log(sortArray([2, -5, 1, 4, 7, 8]));