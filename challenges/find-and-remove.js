// The insurance guy calls. They were about to pay you all that fortune you've been anxiously waiting for, but 
// they detected further irregularities; the list of stolen items is misformatted and appears to contain other entries 
// that don't belong there. Find and remove them.

// You receive an object with nested objects with strings as values. 
// Convert their values to number and return an object without the entries that evaluate to NaN.

// Examples

// findAndRemove({
//     bedroom: {
//       slippers: "10000",
//       piano: "550",
//       call: "vet",
//       travel: "world",
//     },
//   }) ➞ {
//     bedroom: {
//       slippers: 10000,
//       piano: 5500,
//     },
//   }

//  findAndRemove({
//     kitchen: {
//       ["gold spoons"]: "900",
//       piano: "550",
//       notes: "ga0r76ba22g4e",
//     },
//     cellar: {
//       reminder: "dog",
//       bottle: "750",
//     },
//   }) ➞ {
//     kitchen: {
//       ["gold spoons"]: 900,
//       piano: 550,
//     },
//     cellar: {
//       bottle: 750,
//     },
//   }

function findAndRemove(obj){
  for (let item in obj){
    for (let entry in obj[item]){
      if (Number.isNaN(parseInt(obj[item][entry]))){
        delete obj[item][entry];
      };
    };
  };
  return obj;
};

console.log(findAndRemove({
      kitchen: {
        ["gold spoons"]: "900",
        piano: "550",
        notes: "ga0r76ba22g4e",
      },
      cellar: {
        reminder: "dog",
        bottle: "750",
      }}));

console.log(findAndRemove({
      bedroom: {
        slippers: "10000",
        piano: "550",
        call: "vet",
        travel: "world",
      },
    }));