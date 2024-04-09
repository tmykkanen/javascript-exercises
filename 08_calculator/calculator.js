const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;

};

const sum = function(array) {

  return array.reduce((total, current) => total + current, 0);

};

const multiply = function(array) {

  return array.reduce((product, current) => product * current)
  
};

const power = function(a, b) {
  return a ** b;
	
};

const factorial = function(num) {

    if (num === 0) {
      return 1;
    }

    let factorial = 1
    
    for (i = num; i > 0; i--) {
        factorial *= i
      }

    return factorial;

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
