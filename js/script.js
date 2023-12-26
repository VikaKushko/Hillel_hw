"use strict";

let user = {
  name: "Vika",
  surname: "Kushko",
  age: 10,

  get fullname() {
    return `${this.name} ${this.surname}`;
  },
};
console.log(user.fullname);

Object.defineProperty(user, "name", {
  writable: false,
});
Object.defineProperty(user, "age", {
  enumerable: false,
});

for (let prop in user) {
  console.log(prop);
}

let keys = Object.keys(user);
console.log(keys);

Object.freeze(user);

try {
  user.name = "Vlad";
} catch (error) {
  console.error(error.message);
}
