function catAge(year) {
  let age = 0;
  if (year === 0) {
    return age;
  } else if (year === 1) {
    age += 15;
    return age;
  } else if (year === 2) {
    age += 15 + 9;
    return age;
  } else if (year === 3) {
    age += 15 + 9 + 4
    return age;
  } else if (year >= 4) {
    age += 15 + 9 + (4 * (year - 2));
    return age
  }
}

console.log(catAge(0))
console.log(catAge(1))
console.log(catAge(2))
console.log(catAge(3))
console.log(catAge(4))
console.log(catAge(5))