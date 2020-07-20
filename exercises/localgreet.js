function localGreet(string) {
  
  function extractRegion(string) {
  let region = string.slice(3, 5);
  return region;
  }
  
  let region = extractRegion(string)

  function extractLanguage(string) {
  let language = string.slice(0, 2)
  return language;
  }
  
  let language = extractLanguage(string);

  function greet(string) {
    switch(language) {
      
    case 'en' :
      switch(region) {
      case 'US' :
        console.log('Hey!');
        break;
      case 'GB' :
        console.log('Hello!');
        break;
      case 'AU' :
        console.log('Howdy!');
        break;
      }
      break;
      
    case 'fr' :
      console.log('Salut!');
      break;
    case 'sp' :
      console.log('Hola!');
      break;
    default :
      console.log('I don\'t understand that language!')
    }
  
  }
  
  let greeting = greet(string);
}

localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'
localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'