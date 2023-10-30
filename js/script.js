const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

// Знайти суму та кількість позитивних елементів
const positiveNumbers = arr.filter((num) => num > 0);
const sumPositives = positiveNumbers.reduce((sum, num) => sum + num, 0);
const countPositives = positiveNumbers.length;

// Знайти мінімальний елемент масиву та його порядковий номер.
const minElement = Math.min(...arr);
const minElementIndex = arr.indexOf(minElement);

// Знайти максимальний елемент масиву та його порядковий номер.
const maxElement = Math.max(...arr);
const maxElementIndex = arr.indexOf(maxElement);

// Визначити кількість негативних елементів.
const countNegatives = arr.filter((num) => num < 0).length;

// Знайти кількість парних позитивних елементів.
const countPositives = arr.filter((num) => num > 0).length;

// Знайти суму парних позитивних елементів.
const evenElements = arr.filter((num) => num > 0 && num % 2 === 0);
const sumEvenPositives = evenElements.reduce((sum, num) => sum + num, 0);
const countEvenPositives = evenElements.length;

// Знайти суму непарних позитивних елементів.
const evenElements = arr.filter((num) => num < 0 && num % 2 !== 0);
const sumEvenNegatives = evenElements.reduce((sum, num) => sum + num, 0);

// Знайти добуток позитивних елементів.
const evenElements = arr.filter((num) => num > 0);
const mulEvenPositives = evenElements.reduce((sum, num) => sum * num, 1);

// Знайти найбільший серед елементів масиву, ост альні обнулити.
const maxElementZeroed = Math.max(...arr);
const arra = arr.map((num) => (num === maxElementZeroed ? num : 0));

console.log(sumPositives);
console.log(countPositives);
console.log(minElementIndex);
console.log(maxElementIndex);
console.log(countNegatives);
console.log(countPositives);
console.log(sumEvenPositives);
console.log(countEvenPositives);
console.log(sumEvenNegatives);
console.log(mulEvenPositives);
console.log(arra);
