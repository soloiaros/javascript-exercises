const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numberArray) {
	return numberArray.reduce((ac, cu) => ac + cu, 0);
};

const multiply = function(numberArray) {
  return numberArray.reduce((ac, cu) => ac * cu);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
  if (number === 0) {return 1} else {
    factorialNumbers = [];
    for (let i = 1; i <= number; i++) factorialNumbers.push(i);
    return factorialNumbers.reduce((ac, cu) => ac * cu);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
