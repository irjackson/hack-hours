// Mubashir can talk with monkeys. You can also learn their simple language.

// Create a function that takes a string txt and returns the string in monkeys language. You have to figure out their language from test cases.

// Examples
// monkeyTalk("Mubashir Hassan") ➞ "Ook ook."
// monkeyTalk("Hello") ➞ "Ook."
// monkeyTalk("Matt") ➞ "Ook."
// monkeyTalk("Everyone") ➞ "Eek."
// monkeyTalk("Edabit is Amazing") ➞ "Eek eek eek."

function monkeyTalk(txt){
  const vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
  let space = true;
  let first = true;
  let translation = [];
  for (let i = 0; i < txt.length; i++){
    if (space){
      if (vowels.includes(txt[i])){
        if (first){
          translation.push('Eek');
          first = false;
          space = false;
          continue;
        };
        translation.push('eek');
      } 
      else if (!vowels.includes(txt[i])){
        if (first){
          translation.push('Ook');
          first = false;
          space = false;
          continue;
        }
        translation.push('ook');
      };  
      space = false;
    };
    if (txt[i] === ' '){
      space = true;
    };
  };
  return translation.join(' ')+ '.';
};

console.log(monkeyTalk("Hello"));
console.log(monkeyTalk("Mubashir Hassan"));
console.log(monkeyTalk("Edabit is Amazing"));
console.log(monkeyTalk('you are so beautiful'));