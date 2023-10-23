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
const multiplay = function (n, d) {
  return n * d;
};

function mainFunction(callback) {
  const num = prompt("Enter number");
  const degree = prompt("Enter degree");
  return callback(num, degree);
}
alert(mainFunction(multiplay));

// Task 3
const division = function (n, d) {
  return n / d;
};

function mainFunction(callback) {
  const num = prompt("Enter number");
  const degree = prompt("Enter degree");
  return callback(num, degree);
}
alert(mainFunction(division));

// Task 4
const modulo = function (n, d) {
  return n % d;
};

function mainFunction(callback) {
  const num = prompt("Enter number");
  const degree = prompt("Enter degree");
  return callback(num, degree);
}
alert(mainFunction(modulo));
