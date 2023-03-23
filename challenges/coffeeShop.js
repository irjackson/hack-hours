// Write a class called CoffeeShop, which has three instance variables:

//     name : a string (basically, of the shop)
//     menu : an array of items (of object type), with each item containing the item (name of the 
//       item), type (whether food or a drink) and price.
//     orders : an empty array

// and seven methods:

//     addOrder: adds the name of the item to the end of the orders array if it exists on the menu. 
//        Otherwise, return "This item is currently unavailable!"
//     fulfillOrder: if the orders array is not empty, return "The {item} is ready!". 
//        If the orders array is empty, return "All orders have been fulfilled!"
//     listOrders: returns the list of orders taken, otherwise, an empty array.
//     dueAmount: returns the total amount due for the orders taken.
//     cheapestItem: returns the name of the cheapest item on the menu.
//     drinksOnly: returns only the item names of type drink from the menu.
//     foodOnly: returns only the item names of type food from the menu.

class CoffeeShop {
	constructor (name, menu, orders) {
		this.name = name;
    this.menu = menu;
    this.orders = orders;
	};

  addOrder(item){
    const filtered = this.menu.filter(a => a['item'] === item)
    if (filtered.length > 0){
      this.orders.push(item);
      return `Order of '${item}' added.`
    } else {
      return 'This item is currently unavailable!';
    };
  };
  fulfillOrder(){
    if (this.orders.length === 0){
      return 'All orders have been fulfilled!';
    } else {
      const ready = this.orders.shift();
      return `${ready} is ready!`;
    };
  };
  listOrders(){
    return this.orders;
  };
  dueAmount(){
    let total = 0;
    for (let i = 0; i < this.menu.length; i++){
      if (this.orders.includes(this.menu[i]['item'])){
        total += this.menu[i]['price'];
      };
    };
    return Math.round(total * 100) / 100;
  };
  cheapestItem(){
    const search = [...this.menu];
    search.sort((a,b) => a['price'] - b['price']);
    return search[0]['item'];
  };
  drinksOnly(){
    const drinkList = this.menu.filter((a => a['type'] === 'drink'));
    const namesOnly = [];
    for (const drink of drinkList){
      namesOnly.push(drink.item);
    };
    return namesOnly;
  };
  foodOnly(){
    const foodList = this.menu.filter((a => a['type'] === 'food'));
    const namesOnly = [];
    for (const food of foodList){
      namesOnly.push(food.item);
    };
    return namesOnly;
  };
};

let [menuA, menuB, menuC] = [
  [
    ["orange juice", "drink", 2.13], ["lemonade", "drink", 0.85], ["cranberry juice", "drink", 3.36],
    ["pineapple juice", "drink", 1.89], ["lemon iced tea", "drink", 1.28], ["apple iced tea", "drink", 1.28],
    ["vanilla chai latte", "drink", 2.48], ["hot chocolate", "drink", 0.99], ["iced coffee", "drink", 1.12],
    ["tuna sandwich", "food", 0.95], ["ham and cheese sandwich", "food", 1.35], ["bacon and egg", "food", 1.15],
    ["steak", "food", 3.28], ["hamburger", "food", 1.05], ["cinnamon roll", "food", 1.05]
  ],
  [
    ["turkey english muffin", "food", 7.99], ["avocado toast", "food", 5.05], ["chocolate croissant", "food", 3.00],
    ["espresso", "drink", 2.99], ["iced caramel macchiato", "drink", 4.50], ["cortado", "drink", 4.00],
    ["nitro cold brew tester", "drink", 8.00]
  ],
  [
    ["cheeseburger with fries", "food", 5.44],
    ["cinnamon roll", "food", 4.99],
    ["hot chocolate", "drink", 2.99],
    ["lemon tea", "drink", 2.50],
    ["iced coffee", "drink", 3.00],
    ["vanilla chai latte", "drink", 4.00]
  ]
].reduce((a, r) => [...a, [...r.map(([n, t, p]) => ({item: n, type: t, price: p}))]], []),

[shopA, shopB, shopC] = [
  new CoffeeShop("*** Deep Into Coffee ***", menuA, []),
  new CoffeeShop("*** Xavier's ***", menuB, []),
  new CoffeeShop("*** Tesha's ***", menuC, [])
];

console.log(shopA.name);
console.log(shopA.cheapestItem());
console.log(shopA.drinksOnly());
console.log(shopA.foodOnly());
console.log(shopA.addOrder('tuna sandwich'));
console.log(shopA.addOrder('iced coffee'));
console.log(shopA.listOrders());
console.log(shopA.dueAmount());
console.log(shopA.fulfillOrder());
console.log(shopA.dueAmount());
console.log(shopA.fulfillOrder());
console.log(shopA.fulfillOrder());
console.log(shopA.listOrders());
console.log(shopA.dueAmount());