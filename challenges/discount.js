// You want to introduce a discount for your online store. 
// Every customer gets a 25% discount on the most expensive item in the shopping cart. 
// The discount will be calculated on just one item, even if the customer buys more than one of the most expensive item.

// Create a function that takes an object and returns the total price after discount.

// Examples
//   twentyFiveOnOne([
//     { name: "Iphone 20x", quantity: 1, price: 1350 },
//     { name: "Samsung x30", quantity: 1, price: 1225 },
//     { name: "Nokia 9250", quantity: 1, price: 800 },
//     { name: "Tesla Model Y", quantity: 1, price: 72999 }
//   ]) ➞ 58124.25

//   twentyFiveOnOne([
//     { name: "jogging pants", quantity: 1, price: 29.99 },
//     { name: "tennis socks", quantity: 2, price: 5.99 },
//     { name: "sweat shirt", quantity: 1, price: 59.99 }
//   ]) ➞ 86.96

// Notes
//   The total returned price is calculated upon two decimals.

function twentyFiveOnOne(cart){
  cart = cart.sort((a, b) => b.price - a.price);
  let discounted = false;
  let total = 0;
  for (let item of cart){
    for (let i = 0; i < item.quantity; i++){
      if (!discounted){
        total += item.price * 0.75
        discounted = !discounted
      } else {
        total += item.price;
      };
    };
  }
  return Number(total.toFixed(2));
};

console.log(twentyFiveOnOne([
      { name: "Iphone 20x", quantity: 1, price: 1350 },
      { name: "Samsung x30", quantity: 1, price: 1225 },
      { name: "Nokia 9250", quantity: 1, price: 800 },
      { name: "Tesla Model Y", quantity: 1, price: 72999 }
    ]));

console.log(twentyFiveOnOne([
      { name: "jogging pants", quantity: 1, price: 29.99 },
      { name: "tennis socks", quantity: 2, price: 5.99 },
      { name: "sweat shirt", quantity: 1, price: 59.99 }
    ]));