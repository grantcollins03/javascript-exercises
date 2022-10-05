const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
	let sum = 0;
  if (array.length === 0) {
    sum = 0;
  } else {
    for (i = 0; i < array.length; i++) {
      sum += array[i];
    }
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;
  if (array.length === 0) {
    console.log("The given array is empty.");
  } else {
    for (i = 0; i < array.length; i++) {
      product *= array[i];
    }
  }
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let product = 1;
	if (num === 0) {
    product = 1;
  } else {
    for (i = 1; i <= num; i++) {
      product *= i;
    }
  }
  return product;
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
