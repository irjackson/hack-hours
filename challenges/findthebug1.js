// The annual price increasement needs to be done and we have written a script to migrate a product. 
// An object needs to be returned with the old product and the new migrated product for pricing history records.

// All prices need to raised by 15% and the deposit of bottles is increased from $0.15 to $0.20.

// During the tests the old product seems to be the new product as well. Something is not working like expected.

// Expected result
//   migrateProduct({
//     product: "Milk",
//     price: 1.2,
//     containers: [
//       { type: "bottle", deposit: 0.15, liters: 1.5 },
//       { type: "can", deposit: 0.1, liters: 0.33 },
//       { type: "carton", deposit: null, liters: 1 }
//     ]
//   }) ➞ {
//     oldProduct: {
//       product: "Milk",
//       price: 1.2,
//       containers: [
//         { type: "bottle", deposit: 0.15, liters: 1.5 },
//         { type: "can", deposit: 0.1, liters: 0.33 },
//         { type: "carton", deposit: null, liters: 1 }
//       ]
//     },
//     newProduct: {
//       product: "Milk",
//       price: 1.38,
//       containers: [
//         { type: "bottle", deposit: 0.2, liters: 1.5 },
//         { type: "can", deposit: 0.1, liters: 0.33 },
//         { type: "carton", deposit: null, liters: 1 }
//       ]
//     }
//   }

function migrateProduct(oldProduct) {
	const newProduct = Object.assign({}, oldProduct);
	newProduct.price *= 1.15
	newProduct.containers = newProduct.containers.map((container => {
		if (container.type === 'bottle') {
			container.deposit = 0.20
		}
		return container;
	}));
	
	return { oldProduct, newProduct };
};

console.log(migrateProduct({
      product: "Milk",
      price: 1.2,
      containers: [
        { type: "bottle", deposit: 0.15, liters: 1.5 },
        { type: "can", deposit: 0.1, liters: 0.33 },
        { type: "carton", deposit: null, liters: 1 }
      ]
    }));