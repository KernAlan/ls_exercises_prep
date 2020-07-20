function greet2(defaultGreet = 'Hello,', defaultRecip = 'world') {
  return defaultGreet + ' ' + defaultRecip + '!';
}

console.log(greet2())
console.log(greet2('Salutations,'));                   // logs: Salutations, world!
console.log(greet2('Good morning,', 'Launch School')); // logs: Good morning, Launch School!