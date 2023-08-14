// Mubashir needs your help to learn javaScript Programming. Help him by modifying a given string txt as follows:

//     Reverse the string given.
//     Replace each letter to its position in the alphabet for example (a = 1, b = 2, c = 3, ...).
//     Join the array and convert it to a number.
//     Convert the number to binary.
//     Convert the string back to a number.

// See below example for more understanding :

// modify("hello") ➞ 111001101011101101101010

//  "hello" = "olleh"

//  "olleh" = ['15', '12', '12', '5', '8']

//  ['15', '12', '12', '5', '8'] = 15121258

//  15121258 = "111001101011101101101010"

//  "111001101011101101101010" = 111001101011101101101010

// Examples
//   modify("hello") ➞ 111001101011101101101010
//   modify("mubashir") ➞ 10110000110010000110011111000111000001
//   modify("edabit") ➞ 111111110110001110001

// Notes
//   There are no spaces and the string is lowercase.

function modify(txt){
  txt = txt.split('').reverse();
  txt = txt.map(el => el.charCodeAt(0) - 96)
  txt = Number(txt.join(''))
  return txt.toString(2);
};

console.log(modify('hello'));
console.log(modify('mubashir'));
console.log(modify('edabit'));