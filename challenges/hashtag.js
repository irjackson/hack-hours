// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

//     It must start with a hashtag (#).
//     All words must have their first letter capitalized.
//     If the final newTag is longer than 140 chars it must return false.
//     If the input or the newTag is an empty string it must return false.

// Examples

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function hashtag(str){
  if (str.length > 140) return false;
  let newTag = ['#'];
  let capitalize = false;
  for (let i = 0; i < str.length; i++){
    if (str[i] === ' '){
      capitalize = true;
      continue;
    };
    if (capitalize){
      newTag.push(str[i].toUpperCase());
      capitalize = false;
    } else{
      newTag.push(str[i]);
    };
  }
  if (newTag.join('') === '#') return false;
  return newTag.join('');
};

console.log(hashtag(' Hello there thanks for trying my Kata'));
console.log(hashtag('    Hello     World   '));
console.log(hashtag(''));