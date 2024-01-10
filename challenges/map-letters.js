// Given a word, create an object that stores the indexes of each letter in an array.

// Make sure the letters are the keys.

// Examples

// mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }

// mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }

// mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }

// Notes

// All strings given will be lowercase.

function mapLetters(word) {
	let newMap = {}
	for (let i = 0; i < word.length; i++){
		if (newMap[word[i]]){
			newMap[word[i]].push(i)
		}
		else {
			newMap[word[i]] = [i]
		}
	}
  return newMap
}

console.log(mapLetters("abcdefg"))
console.log(mapLetters(""));
console.log(mapLetters("mummy"))