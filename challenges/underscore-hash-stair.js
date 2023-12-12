// Create a function that will build a staircase using the underscore _ and hash # symbols. 
// A positive value denotes the staircase's upward direction and downwards for a negative value.

// Examples
//   staircase(3) ➞ "__#\n_##\n###"
//   __#
//   _##
//   ###

//   staircase(7) ➞ "______#\n_____##\n____###\n___####\n__#####\n_######\n#######"
//   ______#
//   _____##
//   ____###
//   ___####
//   __#####
//   _######
//   #######

//   staircase(2) ➞ "_#\n##"
//   _#
//   ##

//   staircase(-8) ➞ "########\n_#######\n__######\n___#####\n____####\n_____###\n______##\n_______#"
//   ########
//   _#######
//   __######
//   ___#####
//   ____####
//   _____###
//   ______##
//   _______#

// Notes

//     All inputs are either positive or negative values.
//     The string to be returned should be adjoined with the newline character \n.
//     You're expected to solve this challenge using a recursive approach.

function staircase(n, n2 = 1){
  if (n == 1) return "#".repeat(Math.abs(n2))
  if (n == -1) return "_".repeat(Math.abs(n2-1)) + "#"
  return n > 0 ? "_".repeat(n-1)+"#".repeat(n2) + "\n" + staircase(n-1, n2+1) : "_".repeat(Math.abs(Math.abs(n2)-1))+ "#".repeat(Math.abs(n))  + "\n" + staircase(n+1, n2+1)
};

console.log(staircase(7));
console.log(staircase(-8));