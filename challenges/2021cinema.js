// Given an array of seats, return the maximum number of new people which can be seated, as long as there is at least a gap 
// of 2 seats between people.

//     Empty seats are given as 0.
//     Occupied seats are given as 1.
//     Don't move any seats which are already occupied, even if they are less than 2 seats apart. Consider only the gaps 
//     between new seats and existing seats.

// Examples
  // maximumSeating([0, 0, 0, 1, 0, 0, 1, 0, 0, 0]) ➞ 2
    // [1, 0, 0, 1, 0, 0, 1, 0, 0, 1]
  // maximumSeating([0, 0, 0, 0]) ➞ 2
    // [1, 0, 0, 1]
  // maximumSeating([1, 0, 0, 0, 0, 1]) ➞ 0
    // There is no way to have a gap of at least 2 chairs when adding someone else.

// Notes
//     Notice how there may be several possibilities for assigning seats to people, but these cases won't affect the results.
//     All seats will be valid.

function maximumSeating(arr){
  let openSeats = 0;
  let ones = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === 1){
      ones++;
      let j = i - 2;
      while (arr[j] === 0){
        j++;
      };
      if (j > 2){
        openSeats++;
      }
      j = i + 2;
      while (arr[j] === 0){
        j--;
      };
      if (j < 2){
        openSeats++;
      };
    };
  };
  console.log(ones);
  if (ones === 0){
    for (let x = 0; x < arr.length; x++){
      if (x === 0 || x % 3 === 0){
        openSeats++;
      }
    }
  }
  return openSeats;
};

console.log(maximumSeating([0, 0, 0, 1, 0, 0, 1, 0, 0, 0]));
console.log(maximumSeating([0, 0, 0, 0]));
console.log(maximumSeating([1, 0, 0, 0, 0, 1]));
console.log(maximumSeating([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));