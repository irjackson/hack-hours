// Create a function that returns the frequency distribution of an array. This function should return an object, where 
// the keys are the unique elements and the values are the frequency in which those elements occur.

// Examples
// getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }
// getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }
// getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }
// getFrequencies([]) ➞ {}

function getFrequencies(array){
  if (typeof array !== 'object') return 'ERROR: input must be array';
  const elements = {};
  if (array.length === 0) return elements;
  for (let i = 0; i < array.length; i++){
    elements[`${array[i]}`] = elements[`${array[i]}`] + 1 || 1;
  }
  return elements;
};

console.log(getFrequencies(["A", "B", "A", "A", "A"]));
console.log(getFrequencies([1, 2, 3, 3, 2]));
console.log(getFrequencies([true, false, true, false, false]));
console.log(getFrequencies([]));