// Create a program that converts a phone number with letters to one with only numbers.

// Number	Letter
//   0	none
//   1	none
//   2	ABC
//   3	DEF
//   4	GHI
//   5	JKL
//   6	MNO
//   7	PQRS
//   8	TUV
//   9	WXYZ

// Examples
//   textToNum("123-647-EYES") ➞ "123-647-3937"
//   textToNum("(325)444-TEST") ➞ "(325)444-8378"
//   textToNum("653-TRY-THIS") ➞ "653-879-8447"
//   textToNum("435-224-7613") ➞ "435-224-7613"

// Notes

//     All inputs will be formatted as a string representing a proper phone number in the 
//     format XXX-XXX-XXXX or (XXX)XXX-XXXX, using numbers and capital letters.

const keypad = {
  'ABC': 2,
  'DEF': 3,
  'GHI': 4,
  'JKL': 5,
  'MNO': 6,
  'PRQS': 7,
  'TUV': 8,
  'WXYZ': 9
};

function textToNum(phone) {
  return phone.replace(/[A-Z]/g, (letter) => keypad[Object.keys(keypad).find(key => key.includes(letter))]);
};

console.log(textToNum("123-647-EYES"));
console.log(textToNum("(325)444-TEST"));
console.log(textToNum("653-TRY-THIS"));
console.log(textToNum("435-224-7613"));