let objToCopy = {
  foo: 1,
  bar: 2,
};

function copyFun(object) {
  let newObj = Object.create(object);
  let newKeys = Object.keys(object);
  return newObj + newKeys;
}
  
copyFun(objToCopy);
console.log(objToCopy);