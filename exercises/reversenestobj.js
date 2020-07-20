let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let i = 0;
let array = {}
for (let i = 0; i < nestedArray.length; i++) {
  let pair = nestedArray[i];
  
  array[pair[0]] = pair[1];
}

console.log(array)

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }