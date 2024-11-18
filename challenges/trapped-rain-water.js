// Given an array height, representing the heights of a series of stacked blocks, return the amount of rain water that can be trapped
// between the blocks after a rain.

// Note: Water is trapped when there is a valley between the blocks.

// For this input: height[] = [3, 0, 2, 0, 4]

// the result should be: 7

function trap(height){
  let peak = null;
  let totalWater = 0;
  let gapStart = 0;
  let gapEnd = 0;
  let gaps = [];
  for (let i = 0; i < height.length; i++){
    if (height[i] > peak) peak = height[i];
  };
  let gapHeight = peak - 1;
  console.log(gapHeight);
  for (let i = 0 ; i < height.length; i++){
    if (height[i] === gapHeight){
      gapStart = height[i];
      let count = i+1;
      while (height[count] < gapStart){
        gaps.push(height[count]);
        count++;
      }
      gapEnd = height[count];
    }
    else if (height[i] === peak){
      gapStart = gapHeight;
      let count = i+1;
      while (height[count] < gapStart){
        gaps.push(height[count]);
        count++;
      }
      gapEnd = height[count];
    };
  };
  console.log(gaps);
  for (let i = 0; i < gaps.length; i++){
    totalWater += gapHeight - gaps[i];
  }
  return totalWater;  
};

console.log(trap([3, 0, 2, 0, 4]));
console.log(trap([4, 2, 3, 0, 2, 3]));