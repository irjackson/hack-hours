// You were tasked with making a list of every makeup item your local pharmacy had in stock. 
// You created a very long array of each item, with each element having both a name and brand property. 
// Now you're looking to simplify the list by combining duplicate items, and adding a count property to everything.

// Example
//   simplifyList([
//     { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
//     { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
//     { brand: "Urban Decay", name: "Naked Honey Pallete" },
//     { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
//     { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
//     { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
//   ]) ➞ [
//     { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
//     { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
//     { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 3 }
//   ]

// Notes
//     There will always be one or more element in the given array.
//     Each element will always have a brand and name property.
//     All duplicates will be displayed in order.

function simplifyList(list) {
  const newList = [];
  let curr;
  let entry = {};
  for (let obj of list){
    if (curr !== obj['brand']){
      newList.push(entry);
      entry = {};
      curr = obj['brand'];
      Object.assign(entry, obj);
      entry['count'] = entry['count'] + 1 || 1;
    } 
    else {
      entry['count'] = entry['count'] + 1 || 1;
    };
  };
  newList.shift();
  newList.push(entry);
  return newList;
};

console.log(simplifyList([
      { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
      { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
      { brand: "Urban Decay", name: "Naked Honey Pallete" },
      { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
      { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
      { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
    ]));