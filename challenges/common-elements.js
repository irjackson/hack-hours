/*

Write a function called commonElements that takes in any number of arrays in the 
argument. The arrays may contain both numbers and strings. It should return a new array
with all the common elements (both numbers and/or strings) from the given input. 
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.


ex: 
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

commonElements(arr1, arr2, arr3) -> [2, 3, 2000, 'dog']
*/

const commonElements = (...args) => {
  const output = [];
  console.log(args);
  for(let i = 0; i < args.length; i++){
    const curr = args[i];
    const next = args[i + 1];
    console.log(curr);
    console.log(next);
    if(args[i] === undefined && output.length === 0){
      return 'Nothing in Common!'
    }
    for(let el of curr){
      console.log(el);
      if(curr.includes(next)){
        output.push(next)
      }
    }
    console.log(output)
  }
}
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];
commonElements(arr1, arr2, arr3);

/*
** Extension **
Refactor your function to have O(n) time complexity.
*/

const commonElementsOptimized = (...args) => {

}
