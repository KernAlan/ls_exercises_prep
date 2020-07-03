let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you? '));
console.log(`You are ${age} years old.`)
for (let year = 10; year < 50; year += 10, age += 10) {
  console.log(`In ${year} years, you will be ${age + 10} years old.`)
}