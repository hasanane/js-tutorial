// 1. write a calculator that does the following operations:
//      add, substract, divide, multiply
// 2. the calculator has to have a getter called equals that calculates the result of the calculation
// 3. the calculator has to have a getter called fullEquation that returns the equation algebraicly:
//      example: calc = Calculator(2) 
//      console.log(calc.add(1).substract(2).divide(4).add(12).multiply(13).fullEquation)
//      2 + 1 - 2 / 4 + 12 * 13 = 159.25
// 3. the calculator has to support method chaining:
//      example: calc.add(1).substract(2).divide(4).add(12).multiply(13) ...etc.
//      Note: the operations can be done left to right without respecting operation precendece
// 4. the calculator has to have a way to "undo" operations.
//      example: calc = new Calculator(4)
//              calc.add(4).substract(2).equals // 6
//              calc.add(4).substract(2).equals.undo(1) // 8
//      Note: the fullEquation method must print the eauqtion undone
//              example: calc = new Calculator(4)
//                      calc.add(4).substract(2).equals.undo(1).fullEquation // 8
//                      // WRONG OUTPUT: 4 + 4 - 2 + 2 = 8
//                      // CORRECT OUTPUT: 4 + 4 = 8
// 5. write a few comments on how you would go about supporting order of operations in this calculator? 
// Consider the following in your commentary:
//      * Composition vs inheritance? which one would be helpful here?
//      * Is it better to know this requirement at the beginning of the work? if so, why?


class Calculator {}