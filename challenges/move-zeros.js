// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(array){
  let zeroCount = 0;
  const returnArray = [];
  for (let i = 0; i < array.length; i++){
    if (array[i] === 0){
      zeroCount += 1;
      continue;
    };
    returnArray.push(array[i]);
  };
  while (zeroCount > 0){
    returnArray.push(0);
    zeroCount--;
  }
  return returnArray;
};

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));