let list1 = [ 1, 6, 3 ,2 ]
let list2 = [ -1, -6, -3, -2 ]
let list3 = [ 2, 2 ]

function arrayMax(array) { 
  return Math.max.apply(null, array)
}

console.log(arrayMax(list1))
console.log(arrayMax(list2))
console.log(arrayMax(list3))