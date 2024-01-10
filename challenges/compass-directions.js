// You face 1 out of the 4 compass directions: N, S, E or W.

//     A left turn is a counter-clockwise turn. e.g. N (left-turn) ➞ W.
//     A right turn is a clockwise turn. e.g. N (right-turn) ➞ E.

// Create a function that takes in a starting direction and a sequence of left and right turns, and outputs the final direction faced.

// Examples

// finalDirection("N", ["L", "L", "L"]) ➞ "E"

// finalDirection("N", ["R", "R", "R", "L"]) ➞ "S"

// finalDirection("N", ["R", "R", "R", "R"]) ➞ "N"

// finalDirection("N", ["R", "L"]) ➞ "N"

// Notes
// You can only face 1 out of the 4 compass directions: N, S, E or W.

function finalDirection(initial, turns){
	let directions = ["N", "E", "S", "W"];
	let start = directions.indexOf(initial);
	for (let i = 0; i < turns.length; i++){
		if (turns[i] === "L"){
			start -= 1;
		}
		if (turns[i] === "R"){
			start += 1;
		}
		if (start > 3){
			start = 0;
		}
		if (start < 0){
			start = 3;
		};
	};
	return directions[start];
};

console.log(finalDirection('N', ['L', 'L', 'L']))
console.log(finalDirection('W', ['L', 'R', 'R']))