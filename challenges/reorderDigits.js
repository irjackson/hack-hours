// Create a function that reorders the digits of each numerical arr in an array based on ascending (asc) or descending (desc) order.

// Examples

// reorderDigits([515, 341, 98, 44, 211], "asc") ➞ [155, 134, 89, 44, 112]

// reorderDigits([515, 341, 98, 44, 211], "desc") ➞ [551, 431, 98, 44, 211]

// reorderDigits([63251, 78221], "asc") ➞ [12356, 12278]

// reorderDigits([63251, 78221], "desc") ➞ [65321, 87221]

// reorderDigits([1, 2, 3, 4], "asc")  ➞ [1, 2, 3, 4]

// reorderDigits([1, 2, 3, 4], "desc") ➞ [1, 2, 3, 4]

// Notes

//     Single-digit numbers should be ordered the same regardless of direction.
//     Numbers in the array should be kept the same order.

function reorderDigits(arr, direction){
  let splitDigits = [];
    if (direction === "asc"){
      for (num of arr){
        num = String(num);
        num = num.split('');
        num = num.sort();
        splitDigits.push(Number(num.join('')));
      };
      return splitDigits;
    } else if (direction === "desc"){
      for (num of arr){
        num = String(num);
        num = num.split('');
        num = num.sort((a,b) => b - a);
        splitDigits.push(Number(num.join('')));
      };
      return splitDigits;
    };
  return arr;
};

console.log(reorderDigits([515, 341, 98, 44, 211], "asc"));
console.log(reorderDigits([515, 341, 98, 44, 211], "desc"));
console.log(reorderDigits([63251, 78221], "asc"));