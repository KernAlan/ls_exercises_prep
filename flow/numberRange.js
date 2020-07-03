function numberRange(number) {
  let x = number;
  if (x <= 50 && x > 0) {
    console.log(x + ' is between 0 and 50.');
  } else if (x > 50 && x <= 100) {
    console.log(x + ' is between 50 and 100.');
  } else if (x > 100) {
    console.log(x + ' is greater than 100.');
  } else if (x < 0) {
    console.log(x + ' is less than 0.')
  } else {
    console.log('No number entered.');
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
  
  