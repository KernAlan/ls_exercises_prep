let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(array, tester) {
  return array.filter((iterator) => tester.test(iterator));
}

console.log(allMatches(words, /lab/));