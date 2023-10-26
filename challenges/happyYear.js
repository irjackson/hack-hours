// Mubashir needs your help to find out the next happy year.

// A Happy Year is the year with only distinct digits. Create a function that takes an integer year and returns the next happy year.

// Examples
  // happyYear(2017) ➞ 2018
    // 2018 has all distinct digits
  // happyYear(1990) ➞ 2013
  // happyYear(2021) ➞ 2031

function happyYear(year){
  let stringNum = String(++year).split('');
  let digits = new Set();
  stringNum.forEach((num) => {digits.add(num)})
  if (digits.size > 3){
    return Number(stringNum.join(''));
  }
  return happyYear(year);
};

console.log(happyYear(2017));
console.log(happyYear(1990));
console.log(happyYear(2021));