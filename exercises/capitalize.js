function toUpper(str) {
return str
    .split(' ')
    .map(function(word) {
        return word[0].toUpperCase() + word.substr(0);
    })
 }

console.log(toUpper('this is a launch school & tech talk'))