// Write a JavaScript function that returns the depth of an object. This function takes one argument that can be any data-type.
// The depth of an object, say obj, is how many nested objects obj contains.
// Assume an empty object has a depth of 0, while an object non-empty but without nested objects has a depth of 1.

// For example :
// var obj = {a: 1, b: {c: 2}};
// has a depth of 2 because it is a non-empty object containing another non-empty object.

// While :
// var emptyObj = {};
// has a depth of 0 because it is empty.

function objDepth(obj, depth = 1){
  //base case
  if(Array.isArray(obj)) return 0;
  if (typeof obj !== 'object'){
    return 'Error: input an object';
  };
  if (Object.getOwnPropertyNames(obj).length === 0) return depth = 0;
  //recursive case
  for (let values of Object.values(obj)){
    if (typeof values === 'object'){
      return objDepth(values, depth + 1);
    };
  };
  return depth;
};

const sampleObj = {a: 1, b: {c: 2}};
const sampleObj2 = {a: 1, b: 2, c: 3};
const arr = [];
console.log(objDepth(sampleObj));
console.log(objDepth(sampleObj2));
console.log(objDepth(arr));