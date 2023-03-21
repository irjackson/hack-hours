// Create a function that takes an array of students and returns an object representing their notes 
// distribution. Keep in mind that all invalid notes should not be counted in the distribution. Valid notes are: 1, 2, 3, 4, 5

// Example
// getNotesDistribution([
//   {
//     "name": "Steve",
//     "notes": [5, 5, 3, -1, 6]
//   },
//   {
//     "name": "John",
//     "notes": [3, 2, 5, 0, -3]
//   }
// ] ➞ {
//   5: 3,
//   3: 2,
//   2: 1
// })

function getNotesDistribution(students) {
  const noteDist = {};
  const validNotes = [1, 2, 3, 4, 5];
  for (let i = 0; i < students.length; i++){
    for (let num of students[i].notes){
      console.log(num);
      if (validNotes.includes(num)){
        noteDist[`${num}`] = noteDist[`${num}`] + 1 || 1;
      }
    }
  }
  return noteDist;
};

console.log(getNotesDistribution([
    {
      "name": "Steve",
      "notes": [5, 5, 3, -1, 6]
    },
    {
      "name": "John",
      "notes": [3, 2, 5, 0, -3]
    }
  ]));