// Task #1
const getFactorial = (num) => {
  if (num !== 1) {
    return num * getFactorial(num - 1);
  } else {
    return num;
  }
};

console.log(getFactorial(3));

// Task #2
const pow = (num, degree) => {
  if (degree === 0) {
    return 1;
  }
  return num * pow(num, degree - 1);
};

console.log(pow(2, 3));

// Task #3
const inte = (a, b) => {
  if (b === 0) {
    return a;
  }
  return inte(a + 1, b - 1);
};

console.log(inte(5, 3));
