let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  return arr.reduce((accumulator, element) => {
    let length = element.length
    if (length % 2 === 1) {
      accumulator.push(length);
    }
    return accumulator;
  }, []);
}

console.log(oddLengths(arr)); // => [1, 5, 3]