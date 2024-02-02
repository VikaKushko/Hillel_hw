"use strict";
function bind(fn, context) {
  return function () {
    const args = Array.from(arguments);
    context.f = fn;
    const result = context.f(...args);
    delete context.f;
    return result;
  };
}

const someObj = {
  firstName: "Ihor",
  lastName: "Cat",
};

const greet = function (message) {
  console.log(`${message}, ${this.firstName} ${this.lastName}`);
};

const boundGreet = bind(greet, someObj);
boundGreet("Hello");
