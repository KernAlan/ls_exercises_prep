function factorial(number) {
  if (number === 0 || number === 1) {
    return 1
  }
  for (let i = number; i > 0; i--) {
    return i * factorial(i -1);
    console.log(factorial())
  }
}

console.log(factorial(0));     // => 1
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320