"use strict";

function cacheComplexCalculations(calc) {
  const wmap = new WeakMap();

  return function (obj) {
    if (wmap.has(obj)) {
      return wmap.get(obj);
    }

    const result = calc(obj);
    wmap.set(obj, result);
    return result;
  };
}

function calc(obj) {
  return obj.a + obj.b;
}
const obj1 = { a: 2, b: 3 };
const obj2 = { a: 7, b: 3 };

const r = cacheComplexCalculations(calc);
console.log(r(obj1));
console.log(r(obj1));
console.log(r(obj2));
console.log(r(obj2));
