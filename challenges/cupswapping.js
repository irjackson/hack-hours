// There are three cups on a table, at positions A, B, and C. At the start, there is a ball hidden under the cup at position B.

// However, I perform several swaps on the cups, which is notated as two letters. For example, if I 
// swap the cups at positions A and B, I could notate this as AB or BA.

// Create a function that returns the letter position that the ball is at, once I finish swapping the cups. The 
// swaps will be given to you as an array.

// Worked Example
  // cupSwapping(["AB", "CA", "AB"]) ➞ "C"
  // Ball begins at position B.
  // Cups A and B swap, so the ball is at position A.
  // Cups C and A swap, so the ball is at position C.
  // Cups A and B swap, but the ball is at position C, so it doesn't move.

// Examples
  // cupSwapping(["AB", "CA"]) ➞ "C"
  // cupSwapping(["AC", "CA", "CA", "AC"]) ➞ "B"
  // cupSwapping(["BA", "AC", "CA", "BC"]) ➞ "A"

// Notes
//     A swap could be notated in two different ways, since both ways end up with the same outcome.
//     All swaps will be notated as capital letters and will be valid.
//     You cannot swap a cup with itself.

function cupSwapping(swaps){
  let ballPos = 'B';
  for (let i = 0; i < swaps.length; i++){
    let swap1 = swaps[i][0];
    let swap2 = swaps[i][1];
    if (swap1 === ballPos){
      ballPos = swap2;
    }
    else if (swap2 === ballPos){
      ballPos = swap1;
    };
  };
  return ballPos;
};

console.log(cupSwapping(["AB", "CA"]));
console.log(cupSwapping(["AC", "CA", "CA", "AC"]));
console.log(cupSwapping(["BA", "AC", "CA", "BC"]));