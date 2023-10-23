// Task 1
const exponentiation = function (n, d) {
  return n ** d;
};

function mainFunction(callback) {
  const num = prompt("Enter number");
  const degree = prompt("Enter degree");
  return callback(num, degree);
}
alert(mainFunction(exponentiation));

// Task 2
const multiplay = function (n, m) {
  return n * m;
};

function mainFunction(callback) {
  const numOne = prompt("Enter number");
  const numTwo = prompt("Enter number");
  return callback(numOne, numTwo);
}
alert(mainFunction(multiplay));

// Task 3
const division = function (n, d) {
  return n / d;
};

function mainFunction(callback) {
  const numOne = prompt("Enter number");
  const numTwo = prompt("Enter number");
  return callback(numOne, numTwo);
}
alert(mainFunction(division));

// Task 4
const modulo = function (n, d) {
  return n % d;
};

function mainFunction(callback) {
  const numOne = prompt("Enter number");
  const numTwo = prompt("Enter number");
  return callback(numOne, numTwo);
}
alert(mainFunction(modulo));
