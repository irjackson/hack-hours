// Create a class Smoothie and do the following:

//     Create a constructor property called ingredients.
//     Create a getCost method which calculates the total cost of the ingredients used to make the smoothie.
//     Create a getPrice method which returns the number from getCost plus the number from getCost multiplied 
//     by 1.5. Round to two decimal places.
//     Create a getName method which gets the ingredients and puts them in alphabetical order into a nice descriptive sentence. If there 
//     are multiple ingredients, add the word "Fusion" to the end but otherwise, add "Smoothie". Remember to change "-berries" to "-berry". 
//     See the examples below.

// Ingredient	Price

// Strawberries	$1.50
// Banana	$0.50
// Mango	$2.50
// Blueberries	$1.00
// Raspberries	$1.00
// Apple	$1.75
// Pineapple	$3.50

// Examples

// s1 = new Smoothie(["Banana"])
// s1.ingredients ➞ ["Banana"]
// s1.getCost() ➞ "$0.50"
// s1.getPrice() ➞ "$1.25"
// s1.getName() ➞ "Banana Smoothie"
// s2 = Smoothie(["Raspberries", "Strawberries", "Blueberries"])
// s2.ingredients ➞ ["Raspberries", "Strawberries", "Blueberries"]
// s2.getCost() ➞ "$3.50"
// s2.getPrice() ➞ "$8.75"
// s2.getName() ➞ "Blueberry Raspberry Strawberry Fusion"

function Smoothie(fruit){
  this.ingredients = fruit;
  const prices = {
    "Strawberries": 1.50,
    "Banana": 0.50,
    "Mango": 2.50,
    "Blueberries": 1.00,
    "Raspberries": 1.00,
    "Apple": 1.75,
    "Pineapple:": 3.50
  };

  this.getCost = () => {
    let total = 0;
    for (let i = 0; i < fruit.length; i++){
      total += prices[`${fruit[i]}`];
    };
    return "$" + parseFloat(total).toFixed(2);
  };

  this.getPrice = () => {
    let total = 0;
    for (let i = 0; i < fruit.length; i++){
      total += prices[`${fruit[i]}`];
    };
    return "$" + parseFloat(total + (1.5 * total)).toFixed(2);
  };

  this.getName = () => {
    let mix = [];
    for (let i = 0; i < fruit.length; i++){
      if (fruit[i].includes("ies")){
        mix.push(fruit[i].slice(0, fruit[i].length - 3) + "y");
      } else {
        mix.push(`${fruit[i]}`);
      };
    };
    if (fruit.length > 1) return mix.join(" ") + " Fusion";
    return mix.join(" ") + " Smoothie;";
  };
};

const s1 = new Smoothie(["Banana"]);
console.log(s1.ingredients);
console.log(s1.getCost());
console.log(s1.getPrice());
console.log(s1.getName());
s1.getName();
const s2 = new Smoothie(["Raspberries", "Strawberries", "Blueberries"])
console.log(s2.ingredients);
console.log(s2.getCost());
console.log(s2.getPrice());
console.log(s2.getName());