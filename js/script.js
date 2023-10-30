const num = prompt("Enter");
const arrayOfDigits = num.split(" ").map(Number && String);

arrayOfDigits.sort();
console.log(arrayOfDigits);

arrayOfDigits.splice(1, 4);
console.log(arrayOfDigits);
