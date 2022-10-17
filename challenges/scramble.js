// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be 
// rearranged to match str2, otherwise returns false.

// Notes:
//     Only lower case letters will be used (a-z). No punctuation or digits will be included.
//     Performance needs to be considered.

// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2){
  const matched = new Set();
  for (let i = 0; i <= str1.length; i++){
    if (matched.size === str2.length){
      return true;
    };
    if (str2.includes(str1[i])){
      matched.add(str1[i]);
    };
  };
  return false;
};

console.log(scramble('rkqodlw', 'world'));
console.log(scramble('cedewaraaossoqqyt', 'codewars'));
console.log(scramble('katas', 'steak'));
