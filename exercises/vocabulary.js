let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (let i = 0; i < vocabulary.length; i += 1) {
  let vocabNest = vocabulary[i];
  for (let j = 0; j < vocabNest.length; j += 1) {
      console.log(vocabNest[j]);
  }
}