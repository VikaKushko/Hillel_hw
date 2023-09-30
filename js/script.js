'use strict';

// Task #1
let visitor = {};
visitor.name = 'John';
visitor.surname = 'Smith';
visitor.name = 'Pete';
delete visitor.name;
console.log(visitor);

// Task #2
const user = {
    name: "John"
};
// Це працюватиме?
user.name = "Pete";
console.log(user);
// Да,все будет работать, консоль выведет "Pete"

// Task #3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = salaries.Ann + salaries.John + salaries.Pete;
console.log(sum);




