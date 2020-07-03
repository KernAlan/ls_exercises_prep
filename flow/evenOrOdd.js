function evenOrOdd(number) {
  let x = number;
  if (!Number.isInteger(x)) {
    console.log('Error');
  } else if (x % 2 === 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
}

evenOrOdd(15)