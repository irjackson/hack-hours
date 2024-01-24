// Create a function that takes an array of date objects and return the "longest streak" (i.e. number of consecutive days in a row).

// Example
  // longestStreak([
  //   {
  //     "date": "2019-09-18"
  //   },
  //   {
  //     "date": "2019-09-19"
  //   },
  //   {
  //     "date": "2019-09-20"
  //   },
  //   {
  //     "date": "2019-09-26"
  //   },
  //   {
  //     "date": "2019-09-27"
  //   },
  //   {
  //     "date": "2019-09-30"
  //   }
  // ]) ➞ 3

// Notes
  // An empty array should return 0.

function longestStreak(arr){
  if (arr.length === 0) return 0;
  else if (arr.length === 1) return 1;
  let longestStreak = 1;
  let streak = 1;
  const dates = arr.map(entry => new Date(entry.date));
  for (let i = 1; i < dates.length; i++){
    if (dates[i] - dates[i-1] === 86400000){
      streak += 1;
      if (streak > longestStreak) longestStreak = streak;
    } else {
      streak = 1;
    };
  }
  return longestStreak;
};

console.log(longestStreak([
  {
    "date": "2019-09-18"
  },
  {
    "date": "2019-09-19"
  },
  {
    "date": "2019-09-20"
  },
  {
    "date": "2019-09-26"
  },
  {
    "date": "2019-09-27"
  },
  {
    "date": "2019-09-30"
  }
]));