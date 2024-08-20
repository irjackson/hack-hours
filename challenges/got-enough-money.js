// Create a function that returns any of the items you can afford in the store with the money you have in your wallet. 
// Sort the list in alphabetical order.

// Examples

// itemsPurchased({
//   Water: "$1",
//   Bread: "$3",
//   TV: "$1,000",
//   Fertilizer: "$20"
// }, "$300") ➞ ["Bread", "Fertilizer", "Water"]

// itemsPurchased({
//   Apple: "$4",
//   Honey: "$3",
//   Fan: "$14",
//   Bananas: "$4",
//   Pan: "$100",
//   Spoon: "$2"
//   }, "$100") ➞ ["Apple", "Bananas", "Fan", "Honey", "Pan", "Spoon"]

// itemsPurchased({
//   Phone: "$999",
//   Speakers: "$300",
//   Laptop: "$5,000",
//   PC: "$1200"},
// "$1") ➞ "Nothing"

// Notes
// Return "Nothing" if you can't afford anything from the store.

function itemsPurchased(store, wallet){
  let regex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
  store = Object.entries(store);
  wallet = wallet.replace(regex, '');
  let boughtItems = [];
  for (let item of store){
    item[1] = item[1].replace(regex, '');
    if (wallet >= parseInt(item[1])){
      boughtItems.push(item[0]);
    };
  };
  if (boughtItems.length >= 1){
    return boughtItems.sort();
  } else {
    return "Nothing";
  };
};

console.log(itemsPurchased({
    Water: "$1",
    Bread: "$3",
    TV: "$1,000",
    Fertilizer: "$20"
  }, "$300"));
console.log(itemsPurchased({
    Apple: "$4",
    Honey: "$3",
    Fan: "$14",
    Bananas: "$4",
    Pan: "$100",
    Spoon: "$2"
  }, "$100"));
console.log(itemsPurchased({
    Phone: "$999",
    Speakers: "$300",
    Laptop: "$5,000",
    PC: "$1200"},
  "$1"));