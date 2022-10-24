// Your task is to write a function named do_math that receives a single argument. 
// This argument is a string that contains multiple whitespace delimited numbers. 
// Each number has a single alphabet letter somewhere within it.

// Example : "24z6 1x23 y369 89a 900b"

// As shown above, this alphabet letter can appear anywhere within the number. You have to extract the letters and sort the numbers 
// according to their corresponding letters.

// Example : "24z6 1x23 y369 89a 900b" will become 89 900 123 369 246 (ordered according to the alphabet letter)

// Here comes the difficult part, now you have to do a series of computations on the numbers you have extracted.

//     The sequence of computations are + - * /. Basic math rules do NOT apply, you have to do each computation in exactly this order.
//     This has to work for any size of numbers sent in (after division, go back to addition, etc).
//     In the case of duplicate alphabet letters, you have to arrange them according to the number that appeared first in the input string.
//     Remember to also round the final answer to the nearest integer.

// Examples :
// "24z6 1x23 y369 89a 900b" = 89 + 900 - 123 * 369 / 246 = 1299
// "24z6 1z23 y369 89z 900b" = 900 + 369 - 246 * 123 / 89 = 1414
// "10a 90x 14b 78u 45a 7b 34y" = 10 + 45 - 14 * 7 / 78 + 90 - 34 = 60

function do_math(str){
  const nums = str.split(' ');
  let letters = [];

  //Sort by the numbers by letter
  for (let i = 0; i < nums.length; i++){
    letters.push(nums[i].match(/[a-z]/gi));
  };
  letters = letters.flat().sort();
  let sortedNums = new Set();
  for (let i = 0; i < letters.length; i++){
    let index = 0;
    while (nums[index]){
      if (nums[index].includes(letters[i]))
        sortedNums.add(nums[index]);
        index++;
    };
  };
  sortedNums = Array.from(sortedNums);

  //Remove letters from sorted numbers
  for (let i = 0; i < sortedNums.length; i++){
    let curr = sortedNums[i].split('');
    let newNum = '';
    for (let j = 0; j < curr.length; j++){
      if (!curr[j].match(/[a-z]/gi)){
        newNum += curr[j];
      }
    }
    sortedNums[i] = newNum;
  }

  //Iterate through sortedNums and apply operators to 0th index
  let calculate = Number(sortedNums.shift());
  let operators = ['+', '-', '*', '/'];
  let counter = 0;

  while (sortedNums.length){
    switch(operators[counter]){
      case '+':
        calculate += Number(sortedNums[0]);
        break;
      case '-':
        calculate -= Number(sortedNums[0]);
        break;
      case '*':
        calculate *= Number(sortedNums[0]);
        break;
      case '/':
        calculate = (calculate / Number(sortedNums[0]));
        break;
    }
    counter++;
    //check if counter is out of bounds
    if(counter > 3){
      counter = 0;
    }
    sortedNums.shift();
    console.log(sortedNums);
    console.log(calculate);
  }
  return parseInt(Math.ceil(calculate));
};

console.log(do_math("24z6 1x23 y369 89a 900b"));
console.log(do_math("24z6 1z23 y369 89z 900b"));
console.log(do_math("10a 90x 14b 78u 45a 7b 34y"));
