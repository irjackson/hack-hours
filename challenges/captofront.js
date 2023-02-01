// Create a function that moves all capital letters to the front of a word.

// Examples
// capToFront("hApPy") ➞ "APhpy"
// capToFront("moveMENT") ➞ "MENTmove"
// capToFront("shOrtCAKE") ➞ "OCAKEshrt"

function capToFront(str){
  if (typeof str !== 'string') return 'ERROR: input must be a string';
  let capArray = [];
  let lowerArray = [];
  for (let i = 0; i < str.length; i++){
    if (str[i] === str[i].toUpperCase()){
      capArray.push(str[i]);
    }
    else {
      lowerArray.push(str[i]);
    }
  }
  return capArray.join('') + lowerArray.join('');
};

console.log(capToFront('hApPy'));
console.log(capToFront('moveMENT'));
console.log(capToFront('shOrtCAKE'))