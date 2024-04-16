// Create a function that takes an array of football clubs with properties: name, wins, loss, draws, scored, conceded, and 
// returns the team name with the highest number of points. If two teams have the same number of points, return the team with the 
// largest goal difference.

// How to Calculate Points and Goal Difference

// team = { name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }

// Total Points = 3 * wins + 0 * loss + 1 * draws = 3 * 30 + 0 * 3 + 5 * 1 = 95 points
// Goal Difference = scored - conceded = 88 - 20 = 68

// Examples

// champions([
//   {
//     name: "Manchester United",
//     wins: 30,
//     loss: 3,
//     draws: 5,
//     scored: 88,
//     conceded: 20,
//   },
//   {
//     name: "Arsenal",
//     wins: 24,
//     loss: 6,
//     draws: 8,
//     scored: 98,
//     conceded: 29,
//   },
//   {
//     name: "Chelsea",
//     wins: 22,
//     loss: 8,
//     draws: 8,
//     scored: 98,
//     conceded: 29,
//   },
//   ])
// ➞ "Manchester United"

// Notes

// Input is an array of teams.

function champions(teams){
  let result = [0, 0, ''];
  let gDiff = 0;
  let totalPoints = 0;
  function calculateDiff(entry){
    return 3 * entry.wins + 0 * entry.loss + 1 * entry.draws;
  };
  
  for (let i = 0; i < teams.length; i++){
    totalPoints = calculateDiff(teams[i]);
    gDiff = teams[i].scored - teams[i].conceded;
    if (result[0] < totalPoints){
      result[0] = totalPoints;
      result[1] = gDiff;
      result[2] = teams[i].name;
    }
    else if (result[0] === totalPoints){
      if (results[1] < gDiff){
        results[1] = gDiff;
        results[2] = teams[i].name
      };
    };
  };
  return result[2];
};

console.log(champions([
    {
      name: "Manchester United",
      wins: 30,
      loss: 3,
      draws: 5,
      scored: 88,
      conceded: 20,
    },
    {
      name: "Arsenal",
      wins: 24,
      loss: 6,
      draws: 8,
      scored: 98,
      conceded: 29,
    },
    {
      name: "Chelsea",
      wins: 22,
      loss: 8,
      draws: 8,
      scored: 98,
      conceded: 29,
    },
    ]));