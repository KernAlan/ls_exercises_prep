let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let evenOdd = []

myArray.map(function checker(num) {
  if (myArray[num] % 2 === 0) {
    evenOdd.push('even');
  } else {
    evenOdd.push('odd');
  }
})

console.log(myArray)
console.log(evenOdd)
