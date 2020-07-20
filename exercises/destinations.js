let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];
  
function contains(city) {
  let untrue = false;
  for (let i = 0; i < destinations.length; i++) {
    if (city === destinations[i]) {
      console.log('Yes, ' + city + ' is a destination!');
      return true;
    } else {
      if (i === destinations.length - 1) {
        untrue = true;
      } else {
        continue;
      }
    }
    if (untrue === true) {
      console.log('No, ' + city + ' is not a destination.')
    }
  }
}

contains('Barcelona'); // true
contains('Nashville'); // false