"use strict";

// Task1
const arr = [1, 2, 3, 4, 5];
function reverseArray(array) {
  let index = array.length - 1;

  return {
    next() {
      return index >= 0
        ? { value: array[index--], done: false }
        : { done: true };
    },
  };
}

const itr = reverseArray(arr);

console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);

// Task2
function* generator() {
  let a = 0,
    b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let generatorFib = generator();

console.log(generatorFib.next().value);
console.log(generatorFib.next().value);
console.log(generatorFib.next().value);
console.log(generatorFib.next().value);

// Task3
const person = { name: "Vika", age: 18 };
function key(obj) {
  const keys = Object.keys(obj);
  let index = 0;

  return {
    next: function () {
      return index < keys.length
        ? { value: keys[index++], done: false }
        : { done: true };
    },
  };
}

const itr = key(person);

console.log(itr.next().value);
console.log(itr.next().value);
