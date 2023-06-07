// You go to a jewelry shop and try to find the most expensive piece of jewelry. 
// You write down the name of each piece of jewelry and its price.

// Create a function that gets the name of the piece of jewelry with the highest price and returns 
// "The most expensive one is the {name of jewelry piece}".

// Examples

// mostExpensive ({
//   "Diamond Earrings": 980,
//   "Gold Watch": 250,
//   "Pearl Necklace": 4650
// }) ➞  "The most expensive one is the Pearl Necklace"

// mostExpensive({
//   "Silver Bracelet": 280,
//   "Gemstone Earrings": 180,
//   "Diamond Ring": 3500
// }) ➞ "The most expensive one is the Diamond Ring"

// Notes

//     There will always be at least one item in the object.
//     There will always be only one highest priced item (i.e. there will not be two items with the joint highest value).

function mostExpensive(obj){
  let highest = [0, ''];
  for (let item in obj){
    console.log(item);
    if (obj[item] > highest[0]){
      highest[0] = obj[item];
      highest[1] = item;
    };
  };
  return `The most expensive one is the ${highest[1]}.`;
};

console.log(mostExpensive({'Diamond Earrings': 980, 'Gold Watch': 250, 'Pearl Necklace': 4650}));
console.log(mostExpensive({'Silver Bracelet': 280,'Gemstone Earrings': 180, 'Diamond Ring': 3500}));
console.log(mostExpensive({'Simple Gold Ring': 310, 'Silver Anklet': 110, 'Crystal Bracelet': 190}));