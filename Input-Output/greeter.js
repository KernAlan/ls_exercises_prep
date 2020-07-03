function name(prompt) {
  let rlSync = require('readline-sync');
  let question = rlSync.question(prompt);
  return question
}

let firstName = name("What is your first name? ")
let lastName = name("What is your last name? ")
console.log("Hello, " + firstName + " " + lastName + "!")