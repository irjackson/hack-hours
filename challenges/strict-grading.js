// Given an object literal of student names and an array of their test scores over 
// the semester, return a list of all the students who passed the course (in alphabetical order). 
// However, there is one more thing to mention: the pass mark is 100% in everything!

// Examples
//   whoPassed({
//     "John" : ["5/5", "50/50", "10/10", "10/10"],
//     "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
//     "Adam" : ["8/10", "22/25", "3/5", "5/5"],
//     "Barry" : ["3/3", "20/20"]
//   }) ➞ ["Barry", "John"]

//   whoPassed({
//     "Zara" : ["10/10"],
//     "Kris" : ["30/30"],
//     "Charlie" : ["100/100"],
//     "Alex" : ["1/1"]
//   }) ➞ ["Alex", "Charlie", "Kris", "Zara"]

//   whoPassed({
//     "Zach" : ["10/10", "2/4"],
//     "Fred" : ["7/9", "2/3"]
//   }) ➞ []

// Notes
//     All of a student's test scores must be 100% to pass.
//     Remember to return an array of student names sorted alphabetically.

function whoPassed(students){
  let passed = [];
  let studentNames = Object.keys(students);
  let studentGrades = Object.values(students);
  let passOrFail = true;
  let index = 0;
  for (let i = 0; i < studentNames.length; i++){
    if (studentGrades[i][index] === undefined) continue;
    let curr = studentGrades[i][index].split('/');
    while (studentGrades[i].length){
      if (Number(curr[0]) / Number(curr[1]) !== 1){
        passOrFail = false;
        break;
      };
      studentGrades[i].shift();
      index++;
    };
    if (passOrFail === true){
      passed.push(studentNames[i]);
    }
    index = 0;
    passOrFail = true;
  };
  return passed.sort();
};

console.log(whoPassed({
      "John" : ["5/5", "50/50", "10/10", "10/10"],
      "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
      "Adam" : ["8/10", "22/25", "3/5", "5/5"],
      "Barry" : ["3/3", "20/20"]
    }));

console.log(whoPassed({
          "Zara" : ["10/10"],
          "Kris" : ["30/30"],
          "Charlie" : ["100/100"],
          "Alex" : ["1/1"]
        }));

console.log(whoPassed({
              "Zach" : ["10/10", "2/4"],
              "Fred" : ["7/9", "2/3"]
        }));