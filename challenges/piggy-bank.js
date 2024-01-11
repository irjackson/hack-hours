// John wants to save money for his first car. He puts money in his piggy bank every day. 
// Every day, he puts in $1 more than the previous day. 
// Every Monday he starts with a new value ⁠— $1 more than the previous Monday.

// Week 1 (starting at $1)

// Day	Amount	Sum
// Monday	$1	$1
// Tuesday	$2	$3
// Wednesday	$3	$6
// Thursday	$4	$10
// Friday	$5	$15
// Saturday	$6	$21
// Sunday	$7	$28

// Week 2

// Day	Amount	Sum
// Monday	$2	$30
// Tuesday	$3	$33
// Wednesday	$4	$37

// etc ...

// Write a function that returns the number of days he needs to buy his first car cost. John had some savings (include it before counting). 
// On the first Monday, he puts the start amount into his piggy bank.

// Examples
  // numOfDays(2050, 1200, 10) ➞ 53
    // 2050: cost of car, 1200: savings, 10: start amount
    // After 53 days he can buy a car.

  // numOfDays(10000, 2500, 50) ➞ 123
    // After 123 days he can buy a car.

  // numOfDays(500, 300, 50) ➞ 4
    // After 4 days he can buy a car.

// Notes
//     The first day is always Monday.
//     To buy a car, he needs money greater than or equal to cost.
//     All given numbers will be greater than 0.
//     BONUS: Try not adding the sum every day!

function numOfDays(cost, savings, start){
  let days = 0;
  let week = 0;
  let amount = start;
  let monday = start;
  while (savings <= cost){
    amount = monday;
    while (week < 7 && savings <= cost){
      savings += amount;
      amount++;
      days++;
      week++;
    };
    monday += 1;
    week = 0;
  };
  return days;
};

console.log(numOfDays(2050, 1200, 10));
console.log(numOfDays(10000, 2500, 50));
console.log(numOfDays(3333, 1111, 22));