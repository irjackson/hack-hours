// Our football team has finished the championship.

// Our teams match results are recorded in a collection of strings. 
// Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponent's score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:
//     if x > y: 3 points (win)
//     if x < y: 0 points (loss)
//     if x = y: 1 point (tie)

// We need to write a function that takes this collection and returns the number of points our team (x) 
// got in the championship by the rules given above.

// Notes:
//     our team always plays 10 matches in the championship
//     0 <= x <= 4
//     0 <= y <= 4

function totalPoints(collection, points = 0){
  //base case
  if (collection.length === 0) return 'Total points: ' + points;
  //recursive case
  let match = collection[0].split('')
  let team1 = parseInt(match[0]);
  let team2 = parseInt(match[2]);
  if (team1 > team2) points += 3;
  if (team1 === team2) points += 1;
  if (team2 > team1) points += 0;
  return totalPoints(collection.slice(1), points)
};

const record = ["3:1", "2:2", "0:1", "1:2", "4:0", "1:1", "2:4", "3:0", "1:3", "2:1"]; // expecting points = 14
console.log(totalPoints(record));