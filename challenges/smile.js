// We often use smiley faces in correspondence with other people. They allow us to quickly show our 
// reaction to the person(s) we are talking to.

// But one day you wanted to make your correspondence more joyful. So today you have the opportunity to make it happen.
// Task:

// In this kata, your task will be to replace sad emoticons with funny ones.

// The emoticons, will be represented from:

//     Eyes: marked as :, ; or =
//     Nose (optional): marked as - or ~
//     Mouth: marked as ( or [

// Examples:

// smile("Howdy :(")  // should return "Howdy :)"
// smile("Never be sad =[")  // should return "Never be sad =]"
// smile("Change this `=(` and this `:[`")  // should return "Change this `=)` and this `:]`"

function smile(str){
  const sadBracket = /\[/gi;
  const sadParens = /\(/gi;
  if (str.includes('(')){
    str = str.replaceAll(sadParens, ')');
  }
  if (str.includes('[')){
    str = str.replaceAll(sadBracket, ']');
  }
  return str;
};

console.log(smile("Howdy :("));
console.log(smile("Never be sad =["));
console.log(smile("Change this `=(` and this `:[`"))
console.log(smile("I wasn't very creative here :-( But it works ;~[ =~("));