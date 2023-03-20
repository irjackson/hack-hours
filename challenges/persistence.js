// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative 
// persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num, times = 0){
  //base case
  if (num < 0) return 'Error: must be positive number';
  if (num < 10) return times;

  //convert number to string
  let stringify = num.toString();

  //push digits to array
  let digitArr = [];
  for (let i = 0; i < stringify.length; i++){
    digitArr.push(stringify[i]);
  }

  //convert elements to numbers and multiply until digitArr is empty
  let result = Number(digitArr.shift());
  while (digitArr.length){
    result *= Number(digitArr[0]);
    digitArr.shift();
  }

  //increment # of times multipled
  times += 1;

  //recursively call function, pass in multiplied result and times multiplied
  return persistence(result, times);
};

console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));