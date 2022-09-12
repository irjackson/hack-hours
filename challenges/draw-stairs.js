/* 

Write a function that logs to the console an nxn representation of a staircase for any 
given nonnegative height, n. If the passed-in height is negative, console log an empty string.
The staircase must climb up from left to right. Each level of stairs logs a string of
asterisks and/or leading spaces. Note that the last stair should only consist of 
asterisks without any leading spaces.
 
For example:     
drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

const drawStairs = (n, line = [], total = n) => {
  if (n < 0) return console.log('');
  if (n === 0) return `${total + ' STAIRS'}`;
  for(let i = 0; i < n-1; i++){
    line.unshift(' ');
  }
  while (line.length < total){
    line.push('*');
  }
  console.log(line.join(''));
  return drawStairs(n-1, line = [], total);
};
console.log(drawStairs(6));
/* 

Extension:
Write a function that logs to the console an nxn overlapping '+' and 'X' for a given 
number n where n must be an odd positive number. Note that each row of the star must
be 'n' characters long. Be sure to include any leading/trailing spaces per row.

Examples:
drawStar(1) ->
+

drawStar(3) ->
\|/
-+-
/|\

drawStar(5) ->
\ | /
 \|/ 
--+--
 /|\ 
/ | \

*/

const drawStar = n => {

};

module.exports = { drawStairs, drawStar };
