"use strict";
function trackObjects(obj, wSet) {
  if (wSet.has(obj)) {
    return true;
  }
  wSet.add(obj);
  return false;
}

const wSet = new WeakSet();

const obj1 = { id: 1 };
const obj2 = { id: 2 };

console.log(trackObjects(obj1, wSet));
console.log(trackObjects(obj1, wSet));

console.log(trackObjects(obj2, wSet));
console.log(trackObjects(obj2, wSet));
