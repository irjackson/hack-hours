// Your task is to create a function that simulates a vending machine.

// Given an amount of money (in cents ¢ to make it simpler) and a productNumber, the vending machine should output the 
// correct product name and give back the correct amount of change.

// The coins used for the change are the following: [500, 200, 100, 50, 20, 10]

// The return value is an object with 2 properties:

//     product: the product name that the user selected.
//     change: an array of coins (can be empty, must be sorted in descending order).

// Examples
  // vendingMachine(products, 200, 7) ➞ { product: "Crackers", change: [ 50, 20, 10 ] }
  // vendingMachine(products, 500, 0) ➞ "Enter a valid product number"
  // vendingMachine(products, 90, 1) ➞ "Not enough money for this product"

// Products available
const products = [
  { number: 1, price: 100, name: 'Orange juice' },
  { number: 2, price: 200, name: 'Soda' },
  { number: 3, price: 150, name: 'Chocolate snack' },
  { number: 4, price: 250, name: 'Cookies' },
  { number: 5, price: 180, name: 'Gummy bears' },
  { number: 6, price: 500, name: 'Condoms' },
  { number: 7, price: 120, name: 'Crackers' },
  { number: 8, price: 220, name: 'Potato chips' },
  { number: 9, price: 80,  name: 'Small snack' },
];

function vendingMachine(products, payment, choice){
  const delivery = {};
  const coins = [500, 200, 100, 50, 20, 10];
  for (let i = 0; i < products.length; i++){
    if (choice === products[i].number){
      delivery['product'] = products[i].name;
      let changeTotal = payment - products[i].price;
      let change = [];
      if (changeTotal < 0) return 'Not enough money for this product';
      if (changeTotal === 0){
        delivery['change'] = change;
        break;
      }
      for (let i = 0; i < coins.length; i++){
        if (coins[i] <= changeTotal){
          change.push(coins[i]);
          changeTotal -= coins[i];
        };
      };
      delivery['change'] = change;
    };
  };
  if (Object.keys(delivery).length === 0) return 'Enter a valid product number';
  return delivery;
};

console.log(vendingMachine(products, 200, 7));
console.log(vendingMachine(products, 500, 6));
console.log(vendingMachine(products, 500, 0));
console.log(vendingMachine(products, 90, 1));
