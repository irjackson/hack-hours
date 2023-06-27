// Jake is a very habitual person. He eats breakfast at 7:00 a.m. each morning, lunch at 12:00 p.m. and dinner at 7:00 
// p.m. in the evening.

// Create a function that takes in the current time as a string and determines the duration of time before 
// Jake's next meal. Represent this as an array with the first and second elements representing hours and minutes, respectively.

// Examples
//   timeToEat("2:00 p.m.") ➞ [5, 0]
  // 5 hours until the next meal, dinner

//   timeToEat("5:50 a.m.") ➞ [1, 10]
  // 1 hour and 10 minutes until the next meal, breakfast

function timeToEat(currentTime){
  let [time, ampm] = currentTime.split(' ');
  let [hr, min] = time.split(":");
  hr = +hr;
  min = +min;
  if (ampm === "p.m.") hr += 12;
  if (hr === 12) hr -= 12;

  function converter(time, add){
		let total = (hr * 60) + min;
		total = (time * 60 ) - total;
		let newhr = Math.floor(total / 60);
		let newmin = total % 60;
		add === true ? newhr+= 7 : newhr;
		return [newhr, newmin];
	};

  if (hr >= 7 && hr < 12) return converter(12, false);
  if (hr >= 12 && hr < 19) return converter(19, false);
  if (hr < 7) return converter(7, false);
  if (hr >= 19) return converter(24, true);
};
console.log(timeToEat("2:00 p.m."))
console.log(timeToEat("5:50 a.m."))
console.log(timeToEat("6:37 p.m."))
console.log(timeToEat("12:00 a.m."))
console.log(timeToEat("11:58 p.m."))
console.log(timeToEat("3:33 p.m."))
console.log(timeToEat("12:50 a.m."));