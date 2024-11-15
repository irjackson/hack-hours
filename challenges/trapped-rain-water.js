// Given an array height, representing the heights of a series of stacked blocks, return the amount of rain water that can be trapped
// between the blocks after a rain.

// Note: Water is trapped when there is a valley between the blocks.

// For this input: height[] = [3, 0, 2, 0, 4]

// the result should be: 7

function trap(height){
  let peak = null;
  let totalWater = 0;
  for (let i = 0; i < height.length; i++){
    if (height[i] > peak) peak = height[i];
  };
  for (let i of height){
    if (peak - (i + 1) > 0) totalWater += (peak - (i + 1));
  };
  return totalWater;
};

console.log(trap([3, 0, 2, 0, 4]));
console.log(trap([4, 2, 3, 0, 2, 3]))