let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  let newArray = arr.map(function iterator(value) { 
    return value.length })
      .filter(function evenOut(num) { return num % 2 >= 1 });
  return newArray;
}

console.log(oddLengths(arr));