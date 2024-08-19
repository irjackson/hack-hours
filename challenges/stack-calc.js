// A stack machine processes instructions by pushing and popping values to an internal stack. A simple example of this is a calculator.

// The argument passed to run(instructions) will always be a string containing a series of instructions.
// The instruction set of the calculator will be this:

//     +: Pop the last 2 values from the stack, add them, and push the result onto the stack.
//     -: Pop the last 2 values from the stack, subtract the lower one from the topmost one, and push the result.
//     *: Pop the last 2 values, multiply, and push the result.
//     /: Pop the last 2 values, divide the topmost one by the lower one, and push the result.
//     DUP: Duplicate (not double) the top value on the stack.
//     POP: Pop the last value from the stack and discard it.
//     PSH: Performed whenever a number appears as an instruction. Push the number to the stack.
//     Any other instruction (for example, a letter) should result in the value "Invalid instruction: [instruction]"

// Examples

// StackCalc("") ➞ 0

// StackCalc("5 6 +") ➞ 11

// StackCalc("3 DUP +") ➞ 6

// StackCalc("6 5 5 7 * - /") ➞ 5

// StackCalc("x y +") ➞ Invalid instruction: x

// Notes

//     If there are no instructions, the value should remain 0.
//     The return value of get value() should be the topmost value on the stack.

class StackCalc {
  constructor() {
		this.stack = [];
    this.invalidStatement = '';
  }

  run(instructions) {
    instructions = instructions.split(' ');
    for (let step of instructions){
      let val1;
      let val2;
      if (!isNaN(step)){
        this.stack.push(parseInt(step));
        continue;
      };
      console.log(step)
      switch (step){
        case '+':
          val1 = this.stack.pop();
          val2 = this.stack.pop();
          this.stack.push(val1 + val2);
          break;
        case '-':
          val1 = this.stack.pop();
          val2 = this.stack.pop();
          this.stack.push(val1 - val2);
          break;
        case '*':
          val1 = this.stack.pop();
          val2 = this.stack.pop();
          this.stack.push(val1 * val2);
          break;
        case '/':
          val1 = this.stack.pop();
          val2 = this.stack.pop();
          this.stack.push(val1 / val2);
          break;
        case 'DUP':
          this.stack.push(this.stack[this.stack.length - 1]);
          break;
        case 'POP':
          this.stack.pop();
          break; 
        case '':
          return 0;
        default:
          this.invalidStatement = (`Invalid instruction: ${step}`);
          return;
      }
    }
  }
  clear(){
    this.stack = [];
    this.invalidStatement = '';
  }

  get value() {
    console.log(this.stack);
    if (this.invalidStatement !== '') return this.invalidStatement;
    if (this.stack.length === 0) return 0;
    return this.stack[this.stack.length-1];
  }
};

let calc = new StackCalc();
calc.run("y x *"); 
console.log(calc.value);
calc.clear();
calc.run("5 6 +");
console.log(calc.value);
calc.clear();
calc.run("6 5 5 7 * - /");
console.log(calc.value);