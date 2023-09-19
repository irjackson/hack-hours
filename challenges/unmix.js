// lPaeesh le pemu mnxit ehess rtnisg! Oh, sorry, that was supposed to say: Please help me unmix these strings!

// Somehow my strings have all become mixed up; every pair of characters has been swapped. 
// Help me undo this so I can understand my strings again.

// Examples
//   unmix("123456") ➞ "214365"
//   unmix("hTsii  s aimex dpus rtni.g") ➞ "This is a mixed up string."
//   unmix("badce") ➞ "abcde"

// Notes
//   The length of a string can be odd — in this case the last character is not altered (as there's nothing to swap it with).

function unmix(str){
  str = str.split('')
  let store;
  for (let i = 0; i < str.length; i = i+2){
    store = str[i];
    str[i] = str[i+1];
    str[i+1] = store;
  };
  return str.join('');
};

console.log(unmix("123456"));
console.log(unmix("hTsii  s aimex dpus rtni.g"));
console.log(unmix("badce"));