// In this task, you will create a constructor function table for an input and output table.

// Your constructor function will:

//     Have a property this.data (an array) that your table will be stored and accessed.
//     Populate the this.data array with an input and output array for every input.

// The constructor function will take four arguments:

//     func - Function input is entered into, and the output received from.
//     start - Starting point for inputs.
//     end - Last point or maximum input value.
//     step - Amount between inputs.

// Examples

// const square = n => Math.pow(n, 2)
// const half = n => n / 2

// const table = function(func, start, end, step)
// {
//   this.data = []
// }

// var myTable = new table(square, -2, 2, 1)
// myTable.data ➞ [[-2,4], [-1, 1], [0, 0], [1, 1], [2, 4]]

// var myTable = new table(half, -3, 3, 1)
// myTable.data ➞ [ [-3, -1.5], [-2, -1], [-1, -0.5], [0, 0], [1, 0.5], [2, 1], [3, 1.5] ]

const table = function(func, start, end, step) {
	this.data = []
	let curr = start;
	while (curr <= end){
		let newEntry = [];
		newEntry.push(curr);
		let calc = func(curr); 
		newEntry.push(calc);
		this.data.push(newEntry);
		curr += step;
	};
};