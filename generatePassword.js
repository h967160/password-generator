function generatePassword(data) {
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = lowerCaseLetters.toUpperCase();
  const numbers = "1234567890";
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/';

  let collection = [];

  // add character to collection
  if (data.lowercase === "on") {
    collection = collection.concat(lowerCaseLetters.split(""));
  }

  if (data.uppercase === "on") {
    collection = collection.concat(upperCaseLetters.split(""));
  }

  if (data.numbers === "on") {
    collection = collection.concat(numbers.split(""));
  }

  if (data.symbols === "on") {
    collection = collection.concat(symbols.split(""));
  }

  // remove excludeCharacters
  if (data.excludeCharacters) {
    collection = collection.filter(
      (character) => !data.excludeCharacters.includes(character)
    );
  }

  // error message
  if (collection.length === 0) {
    return "There is no valid characters in your selection.";
  }

  // generate password
  let password = "";
  for (let i = 0; i < data.passwordLength; i++) {
    password += sampleCharacter(collection);
  }
  return password;
}
// generate character & randomIndex
function sampleCharacter(collection) {
  let randomIndex = Math.floor(Math.random() * collection.length);
  return collection[randomIndex];
}

//export
module.exports = generatePassword;
