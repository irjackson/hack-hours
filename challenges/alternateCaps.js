// Create a function that alternates the case of the letters in a string (known as Spongecase).

// Examples

// alternatingCaps("Hello") ➞ "HeLlO"
// alternatingCaps("How are you?") ➞ "HoW aRe YoU?"
// alternatingCaps("OMG this website is awesome!") ➞ "OmG tHiS wEbSiTe Is AwEsOmE!"

// Notes

//     The first character should always be UPPERCASE.
//     Ignore spaces.

function alternatingCaps(str){
  let result = [];
  let ignoreSpace = 0;
  for (let i = 0; i < str.length; i++){
    if (ignoreSpace % 2 === 0){
      result.push(str[i].toUpperCase());
    } else {
      result.push(str[i].toLowerCase());
    };
    if (str[i] !== " "){
      ignoreSpace++;
    }
  }
  return result.join('');
};

console.log(alternatingCaps("Hello"));
console.log(alternatingCaps("How are you?"));
console.log(alternatingCaps("OMG this website is awesome!"));