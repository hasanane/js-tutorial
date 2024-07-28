// 1. write a calculator that does the following operations:
//      add, substract, divide, multiply
// 2. the calculator has to have a getter called equals that calculates the result of the calculation
// 3. the calculator has to have a getter called fullEquation that returns the equation algebraicly:
//      example: calc = Calculator(2)
//      console.log(calc.add(1).substract(2).divide(4).add(12).multiply(13).fullEquation)
//      2 + 1 - 2 / 4 + 12 * 13 = 159.25
// 4. the calculator has to support method chaining:
//      example: calc.add(1).substract(2).divide(4).add(12).multiply(13) ...etc.
//      Note: the operations can be done left to right without respecting operation precendece
// 5. the calculator has to have a way to "undo" operations.
//      example: calc = new Calculator(4)
//              calc.add(4).substract(2).equals // 6
//              calc.add(4).substract(2).equals.undo(1) // 8
//      Note: the fullEquation method must print the eauqtion undone
//              example: calc = new Calculator(4)
//                      calc.add(4).substract(2).equals.undo(1).fullEquation // 8
//                      // WRONG OUTPUT: 4 + 4 - 2 + 2 = 8
//                      // CORRECT OUTPUT: 4 + 4 = 8
// 6. write a few comments on how you would go about supporting order of operations in this calculator?
// Consider the following in your commentary:
//      * Composition vs inheritance? which one would be helpful here?
//  * Is it better to know this requirement at the beginning of the work? if so, why?

class Calculator {
  equals: number;
  #fullEquation: string;
  operations: string[];
  numbers: number[];

  add(num: number) {
    this.equals = this.equals + num;
    this.operations[this.operations.length] = "+";
    this.numbers[this.numbers.length] = num;
    return this;
  }
  substract(num: number) {
    this.equals = this.equals - num;
    this.operations[this.operations.length] = "-";
    this.numbers[this.numbers.length] = num;
    return this;
  }
  divide(num: number) {
    this.equals = this.equals / num;
    this.operations[this.operations.length] = "/";
    this.numbers[this.numbers.length] = num;
    return this;
  }
  multiply(num: number) {
    this.equals = this.equals * num;
    this.operations[this.operations.length] = "*";
    this.numbers[this.numbers.length] = num;
    return this;
  }
  undo(num: number) {
    var i: number;
    if (num < 1 || num > this.operations.length) {
      console.log(`cant undo ${num} times 
the value without undo is :`);
      return this;
    } else {
      for (i = 0; i < num; i++) {
        if (this.operations[this.operations.length - 1] == "+") {
          this.equals = this.equals - this.numbers[this.numbers.length - 1];
          this.operations.pop();
          this.numbers.pop();
        } else if (this.operations[this.operations.length - 1] == "-") {
          this.equals = this.equals + this.numbers[this.numbers.length - 1];
          this.operations.pop();
          this.numbers.pop();
        } else if (this.operations[this.operations.length - 1] == "*") {
          this.equals = this.equals / this.numbers[this.numbers.length - 1];
          this.operations.pop();
          this.numbers.pop();
        } else {
          this.equals = this.equals * this.numbers[this.numbers.length - 1];
          this.operations.pop();
          this.numbers.pop();
        }
      }
      return this;
    }
  }
  get fullEquation() {
    var i: number;
    this.#fullEquation = `${this.numbers[0]}`;
    for (i = 0; i < this.operations.length; i++) {
      this.#fullEquation = `${this.#fullEquation} ${this.operations[i]} ${
        this.numbers[i + 1]
      }`;
    }
    return `${this.#fullEquation} = ${this.equals}`;
  }
  constructor(number: number) {
    this.equals = number;
    this.numbers = [number];
    this.operations = [];
    this.#fullEquation = "";
  }
}
var cal = new Calculator(3);
console.log(cal.add(2).divide(2).divide(5).undo(4).fullEquation);
