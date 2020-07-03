function multiply(number1, number2) {
let x = number1
let y = number2
  return x * y
}

let rlSync = require('readline-sync');
let x = parseFloat(rlSync.question("What's the first number? "))
let y = parseFloat(rlSync.question("What's the second number? "))
console.log(x + " x " + y + " = " + multiply(x ,y))