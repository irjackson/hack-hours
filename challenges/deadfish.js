// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

//     i increments the value (initially 0)
//     d decrements the value
//     s squares the value
//     o outputs the value into the return array

// Invalid characters should be ignored.

function parse(str){
  if (typeof str !== 'string') return 'Error: must be a string';
  const input = str.split('');
  let result = 0;
  const returnArr = [];

  while (input.length){
    switch(input[0]){
      case 'i':
        result += 1;
        break;
      case 'd':
        result -= 1;
        break;
      case 's':
        result = result * result;
        break;
      case 'o':
        returnArr.push(result);
        break;
    }
    input.shift();
  }
  return returnArr;
};
