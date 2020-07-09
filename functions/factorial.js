function factorial(n) {
  if (n === 0) {
    return 1;
  }
return n * factorial(n - 1);
}

let rlSync = require('readline-sync');
let choice = Number(rlSync.question("What number to factor? "));
console.log(factorial(choice));