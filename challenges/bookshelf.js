// Create a Book constructor that has two properties :

//     Title
//     Author

// and two methods:

//     A method named getTitle that returns: "Title: " + the instance title.
//     A method named getAuthor that returns: "Author: " + the instance author.

// and instantiate this constructor by creating 3 new books:

//     Pride and Prejudice - Jane Austen (PP)
//     Hamlet - William Shakespeare (H)
//     War and Peace - Leo Tolstoy (WP)

// The name of the new object instances PP, H, and WP, respectively.

// For instance, if I instantiated the following book using this Book constructor function:

//     Harry Potter - J.K. Rowling (HP)

// I would get the following properties and methods:

// Examples
  //   HP.title ➞ "Harry Potter"
  //   HP.author ➞ "J.K. Rowling"
  //   HP.getTitle() ➞ "Title: Harry Potter"
  //   HP.getAuthor() ➞ "Author: J.K. Rowling"


function Book(title, author){
  this.Title = title;
  this.Author = author;

  this.getTitle = () => {
    return this.Title;
  };
  this.getAuthor = () => {
    return this.Author;
  };
};

const PP = new Book("Pride and Prejudice", "Jane Austen");
console.log(PP.getTitle());
console.log(PP.getAuthor());

const H = new Book("Hamlet", "William Shakespeare");
console.log(H.getTitle());
console.log(H.getAuthor());