// Given is an array 'numbers' with integers. 
// Return true if a zero is next to a zero or a four is next to a four. Return false if both occur.

function either404(numbers){
  let match = null;
  let result = false;
  let doubleMatch = {4: null, 0: null};
  for (let i = 0; i < numbers.length; i++){
     if (numbers[i] === 4 || numbers[i] === 0){
      match = numbers[i];
      if (numbers[i-1] === match || numbers[i+1] === match){
        result = true;
        delete doubleMatch[match];
      };
     };
  };
  console.log(Object.keys(doubleMatch));
  if (Object.keys(doubleMatch).length === 0) return false;
  return result;
};

console.log(either404([2,8,4,4]));
console.log(either404([0,0,3,6,4,4]));
console.log(either404([1,4,4,0,2,0,9]));