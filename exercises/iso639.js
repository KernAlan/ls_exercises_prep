function greet(language) {
  if (language === 'en') {
    console.log('hi');
  } else if (language === 'fr') {
    console.log('Salut');
  } else if (language === 'pt') {
    console.log('Ola');
  }
}

greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'