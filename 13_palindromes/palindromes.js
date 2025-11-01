const palindromes = function (string) {
  let strippedString = '';
  for (char of string.toLowerCase()) {
    if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {strippedString += char};
  };
  return strippedString === strippedString.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
