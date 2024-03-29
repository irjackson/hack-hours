// This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, the robot rotates 
// 90 degrees clockwise. Given the amount the robot has moved each time, you have to calculate the robot's final position.

// To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

//     20 steps North, now at (0, 20)
//     30 steps East, now at (30, 20)
//     10 steps South. now at (30, 10)
//     40 steps West, now at (-10, 10)

// ...and will end up at coordinates (-10, 10).

// Examples
// trackRobot(20, 30, 10, 40) ➞ [-10, 10]
// trackRobot() ➞ [0, 0]
  // No movement means the robot stays at (0, 0).
// trackRobot(-10, 20, 10) ➞ [20, -20]
  // The amount to move can be negative.

// Notes
  // Each movement is an integer (whole number).

function trackRobot(...movements){
  if (movements.length === 0) return [0, 0];
  let finalPos = [0, 0];
  const directions = ['n', 'e', 's', 'w'];
  let counter = 0
  for (let i = 0 ; i < movements.length; i++){
    if (i > 3) counter = 0;
    switch (directions[counter]){
      case 'n':
        finalPos[1] += movements[i];
        break;
      case 'e':
        finalPos[0] += movements[i];
        break;
      case 's':
        finalPos[1] -= movements[i];
        break;
      case 'w':
        finalPos[0] -= movements[i];
        break;
    };
    counter++;
  };
  return finalPos;
};

console.log(trackRobot(20, 30, 10, 40));
console.log(trackRobot());
console.log(trackRobot(-10, 20, 10));