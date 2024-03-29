// Your local bank has decided to upgrade its ATM machines by incorporating motion sensor technology. 
// The machines now interpret a series of consecutive dance moves in place of a PIN number.

// Create a program that converts a customer's PIN number to its dance equivalent. 
// There is one dance move per digit in the PIN number. A list of dance moves is given in the code.

// Examples

// danceConvert("0000") ➞ ["Shimmy", "Shake", "Pirouette", "Slide"]

// danceConvert("3856") ➞ [ "Slide", "Arabesque", "Pop", "Arabesque" ]

// danceConvert("9999") ➞ [ "Arabesque", "Shimmy", "Shake", "Pirouette" ]

// danceConvert("32a1") ➞ "Invalid input."

// Notes

//     Each dance move will be selected from a list by index based on the current digit's value plus that digit's index value. 
//       If this value is greater than the last index value of the dance list, it should cycle to the beginning of the list.
//     Valid input will always be a string of four digits. Output will be a string array.
//     If the input is not four valid numbers, return the string, "Invalid input."

const moves = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];

function danceConvert(pin){
  let output = [];
  if (pin.length > 4 || pin.length < 4 || Number(isNaN(pin))) return "Invalid PIN: must be 4 valid numbers";
  for (let i = 0; i < pin.length; i++){
    let selection = parseInt(pin[i]) + parseInt(i);
    if (selection > 9){
      selection -= 10;
    }
    output.push(moves[selection]);
  };
  return output;
};

console.log(danceConvert("0000"));
console.log(danceConvert("3856"));
console.log(danceConvert("9999"));
console.log(danceConvert("32a1"));