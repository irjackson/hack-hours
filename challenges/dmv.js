// You have to get a new driver's license. You show up at the office at the same time as four other people. 
// The office says they will see everyone in alphabetical order and it takes 20 minutes for them to process each new license. 
// All of the agents are available now, and they can each see one customer at a time. How long will it take for you to walk out with 
// your new license?

// Your input will be a string of your name me, an integer of the number of available agents, and a string of the other four names 
// separated by spaces others.

// Return the number of minutes it will take to get your license.

// Examples
  // license("Eric", 2, "Adam Caroline Rebecca Frank") ➞ 40
    // As you are in the second group of people.

  // license("Zebediah", 1, "Bob Jim Becky Pat") ➞ 100
    // As you are the last person.

  // license("Aaron", 3, "Jane Max Olivia Sam") ➞ 20
    // As you are the first.

function license(me, agents, others) {
	let peopleList = others.split(' ');
  peopleList.push(me);
  peopleList.sort();
  let totalMinutes = 20;
  while (peopleList.length){
    for (let i = 0; i < agents; i++){
      if (peopleList[i] === me) return totalMinutes;
      totalMinutes += 20;
      peopleList.shift();
    };
  };
};

console.log(license("Eric", 2, "Adam Caroline Rebecca Frank"));
console.log(license("Zebediah", 1, "Bob Jim Becky Pat"));
console.log(license("Aaron", 3, "Jane Max Olivia Sam"));