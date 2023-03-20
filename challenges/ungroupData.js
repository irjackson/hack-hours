// You volunteered to help out teaching a preschool in your area! You were given an array of all students and 
// some important data about them, grouped by their teacher. Create a function that will ungroup every student so you can 
// look at their details individually.

// Example
// ungroupStudents([{
//   teacher: "Ms. Car",
//   data: [{
//      name: "James",
//      emergenceNumber: "617-771-1082",
//   }, {
//      name: "Alice",
//      alergies: ["nuts", "carrots"],
//   }],
// }, {
//   teacher: "Mr. Lamb",
//   data: [{
//     name: "Aaron",
//     age: 3
//   }]
// }]) ➞ [{
//   teacher: "Ms. Car",
//   name: "James",
//   emergencyNumber: "617-771-1082",
// }, {
//   teacher: "Ms. Car",
//   name: "Alice",
//   alergies: ["nuts", "carrots"],
// }, {
//   teacher: "Mr. Lamb",
//   name: "Aaron",
//   age: 3,
// }]

function ungroupStudents(studentData){
  let result = [];
  for (let i = 0; i < studentData.length; i++){
    for (let student of studentData[i].data){
      const newEntry = {};
      newEntry.teacher = studentData[i].teacher;
      const addDetails = Object.assign(newEntry, student);
      result.push(newEntry);
    };
  };
  return result;
};

console.log(ungroupStudents([{
    teacher: "Ms. Car",
    data: [{
       name: "James",
       emergenceNumber: "617-771-1082",
    }, {
       name: "Alice",
       alergies: ["nuts", "carrots"],
    }],
  }, {
    teacher: "Mr. Lamb",
    data: [{
      name: "Aaron",
      age: 3
    }]
  }]));