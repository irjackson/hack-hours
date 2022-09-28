// Your company assigns each customer a membership ID, and you are implementing a check digit for those IDs.
// The check digit should be calculated by adding up all digits in each membership ID. 
// If the result of the sum is a number with more than a single digit, another iteration is required, 
// and the digits of the result also should be added together. 
// This process should repeat until a single-digit number is calculated.

// For example, for the membership ID "55555" the sum of all digits is 25. 
// Because this is not a single-digit number, 2 and 5 would be added, and the result, 7, would be the check digit.

function createCheckDigit(membershipId, digits = membershipId.split('')) {
  //base case
  if (digits.length === 1) return parseInt(digits);
  //recursive case
  let result = 0;
  for (let i = digits.length - 1; i >= 0; i--){
    result += parseInt(digits[i]);
    digits.pop();
  }
  result = result.toString();
  result = result.split('');
  return createCheckDigit(membershipId, digits = result);
}

console.log(createCheckDigit("55555"));