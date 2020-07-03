let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function nonInteger(array) {
  return array.filter(Number.isInteger);
}

console.log(nonInteger(array))