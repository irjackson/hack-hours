// You are given two arrays. The elements in arr1 threw a party and started to mix around. However, one of the elements got lost! 
// Your task is to return the element which was lost.

// Examples:
// missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8]) ➞ 2
// missing([true, true, false, false, true], [false, true, false, true]) ➞ true
// missing(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"]) ➞ "ugly"

function missing(arr1, arr2){
  for (let i = 0; i < arr1.length; i++){
    if (arr2[i] === undefined){
      return arr1[i];
    };
    if (arr1[i] === arr2[i]){
      continue;
    }
    else {
      return arr1[i];
    }
  }
};

console.log(missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8]));
console.log(missing([true, true, false, false, true], [false, true, false, true]));
console.log(missing(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"]));
console.log(missing(["The", "party", "is", "over", "now"], ["The", "party", "is", "now"]))