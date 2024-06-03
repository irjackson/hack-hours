// Create a function to reproduce the wrap around effect shown:

// Examples

// wrapAround("Hello, World!", 2) ➞ "llo, World!He"

// wrapAround("From what I gathered", -4) ➞ "eredFrom what I gath"

// wrapAround("Excelsior", 30) ➞ "elsiorExc"

// wrapAround("Nonscience", -116) ➞ "cienceNons"

// Notes

//     The offset can be negative.
//     The offset can be greater than the length of string.

function wrapAround(string, offset){
  let result = string.split('');
  let curr;
  if (offset > 0){
    for (let i = 0; i < offset; i++){
      curr = result.shift();
      result.push(curr);
    };
  } else {
    for (let i = 0; i > offset; i--){
      curr = result.pop();
      result.unshift(curr);
    };
  };

  return result.join('');
};

console.log(wrapAround("Hello, World!", 2));
console.log(wrapAround("From what I gathered", -4));
console.log(wrapAround("Excelsior", 30));
console.log(wrapAround("Nonscience", -116));