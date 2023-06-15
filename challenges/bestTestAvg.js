// Given an object with students and the grades that they made on the tests that they took, determine 
// which student has the best Test Average. The key will be the student's name and the value will be an array of their grades. 
// You will only have to return the student's name. You do not need to return their Test Average.

// Examples
//   getBestStudent({
//     John: [100, 90, 80],
//     Bob: [100, 70, 80]
//   }) ➞ "John"

  // John's avg = 90
  // Bob's avg = 83.33

//   getBestStudent({
//     Susan: [67, 84, 75, 63],
//     Mike: [87, 98, 64, 71],
//     Jim: [90, 58, 73, 86]
//   }) ➞ "Mike"

// Notes
//   All students in an object will have the same amount of test scores. So no student will have taken more tests than another.

function getBestStudent(grades){
  let bestAverage = ['', 0];
  for (let student of Object.entries(grades)){
    let sum = 0;
    for (let i = 0; i < student[1].length; i++){
      sum += student[1][i];
    };
    let currAverage = sum / student[1].length;
    if (currAverage > bestAverage[1]){
      bestAverage = [student[0], currAverage];
    };
  };
  return bestAverage[0];
};

console.log(getBestStudent({
      John: [100, 90, 80],
      Bob: [100, 70, 80]
    }));

console.log(getBestStudent({
      Susan: [67, 84, 75, 63],
      Mike: [87, 98, 64, 71],
      Jim: [90, 58, 73, 86]
    }));

console.log(getBestStudent({
    Tim: [93, 84, 49, 71, 76, 83],
    Nick: [88, 91, 74, 72, 63, 68],
    Brad: [100, 94, 72, 64, 58, 81],
    Annie: [79, 93, 82, 82, 63, 87]
  }));

console.log((getBestStudent({
    Eddie: [65, 85, 72, 76],
    Brock: [55, 97, 82, 91],
    Jessica: [78, 62, 79, 99]
  })));