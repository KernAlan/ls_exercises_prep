let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let newArray = Object.keys(obj).map(arr => arr.toUpperCase());

console.log(newArray);