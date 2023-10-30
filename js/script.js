// some

const arr = [1, 2, 3, 4, 5];
function some(num, callback) {
  for (let i = 0; i < num.length; i++) {
    if (callback(num[i], i, num)) {
      return true;
    }
  }
  return false;
}

const hasEven = some(arr, (element) => element % 2 === 0);
console.log(hasEven);

// every
const arr = [1, 2, 3, 4, 5];

function checkCondition(element) {
  return element > 10;
}

function every(arra, condition) {
  for (let i = 0; i < arra.length; i++) {
    if (!condition(arra[i])) {
      return false;
    }
  }
  return true;
}

const a = every(arr, checkCondition);
console.log(a);

// includes
const arr = [1, 2, 3, 4, 5];

function includes(num, condition) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] === condition) {
      return true;
    }
  }
  return false;
}
const a = includes(arr, 3);
console.log(a);

// find
const arr = [1, 2, 3, 4, 5];

function find(num, condition) {
  for (let i = 0; i < num.length; i++) {
    if (condition(num[i])) {
      return num[i];
    }
  }
  return undefined;
}

const a = find(arr, (element) => element === 5);
console.log(a);

// findIndex
const arr = [1, 2, 3, 4, 5];

function findIndex(num, condition) {
  for (let i = 0; i < num.length; i++) {
    if (condition(num[i])) {
      return i;
    }
  }
  return -1;
}

const a = findIndex(arr, (element) => element === 5);
console.log(a);

// indexOf
const arr = [1, 2, 3, 4, 5];
function indexOf(num, element) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] === element) {
      return i;
    }
  }
  return -1;
}

const a = indexOf(arr, 1);
console.log(a);

// lastIndexOf
const arr = [1, 2, 3, 4, 5];
function indexOf(num, element) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] === element) {
      return i;
    }
  }
  return -1;
}

const a = indexOf(arr, 3);
console.log(a);
