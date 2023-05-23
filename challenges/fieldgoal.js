// In (American) Football, a team can score if they manage to kick a ball through the goal 
// (i.e. above the crossbar and between the uprights).

// Create a function that returns true if the ball 0 goes through the goal. You will be given an array of arrays.
  // Examples
  //   isGoalScored([
  //     ["  #     #  "],
  //     ["  #  0  #  "],
  //     ["  #     #  "],
  //     ["  #######  "],
  //     ["     #     "],
  //     ["     #     "],
  //     ["     #     "]
  //   ]) ➞ true

  //   isGoalScored([
  //     ["  #0    #  "],
  //     ["  #     #  "],
  //     ["  #     #  "],
  //     ["  #######  "],
  //     ["     #     "],
  //     ["     #     "],
  //     ["     #     "]
  //   ]) ➞ true

  //   isGoalScored([
  //     ["  #     #  "],
  //     ["  #     #  "],
  //     ["  #     # 0"],
  //     ["  #######  "],
  //     ["     #     "],
  //     ["     #     "],
  //     ["     #     "]
  //   ]) ➞ false

// Notes
//     All goals will be of the same size.
//     All arrays will be of equal length (11).
//     A team can never score if it hits the crossbar or goes underneath it.

function isGoalScored(goal){
  for (let i = 0; i < 3; i++){
    if (goal[i][0].slice(3,8).includes("0") && !goal[i][0].slice(3,8).includes("#")){
      return true;
    }
  }
  return false;
};

console.log(isGoalScored([
      ["  #     #  "],
      ["  #  0  #  "],
      ["  #     #  "],
      ["  #######  "],
      ["     #     "],
      ["     #     "],
      ["     #     "]
    ]));

console.log(isGoalScored([
      ["  #0    #  "],
      ["  #     #  "],
      ["  #     #  "],
      ["  #######  "],
      ["     #     "],
      ["     #     "],
      ["     #     "]
    ]));

console.log(isGoalScored([
      ["  #     #  "],
      ["  #     #  "],
      ["  #     # 0"],
      ["  #######  "],
      ["     #     "],
      ["     #     "],
      ["     #     "]
    ]));