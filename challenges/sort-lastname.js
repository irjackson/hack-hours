// Today you volunteered as a librarian. You were given an array of objects, each one containing different book information. 
// You need to sort the objects in alphabetical order of the author's last name.

// Examples
//   sortByLastName([
//     { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
//     { name: "Warcross", rating: "13+", author: "Marie Lu" },
//     { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
//   ]) ➞ [
//     { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
//     { name: "Warcross", rating: "13+", author: "Marie Lu" },
//     { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
//   ]

// Notes
//     There will always be a name, rating, and author property on each object.
//     The array will never be empty.
//     The author property will always feature only a first and last name.

function sortByLastName(book){
  return book.sort((a, b) => {
    if (a.author.split(' ')[1] < b.author.split(' ')[1]){
      return -1;
    }
    else {
      return 1;
    }
  });
};

console.log(sortByLastName([
  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
]));

console.log(sortByLastName(    [
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "The Selection", rating: "13+", author: "Kiera Cass" },
  { name: "The Night Gardner", rating: "10+", author: "Jonathan Auxier" },
  {
    name: "The School for Good and Evil",
    rating: "11+",
    author: "Soman Chainani",
  }
]));