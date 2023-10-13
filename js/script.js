
// Task№1
let a = Number(prompt('Введите число'));
let aCheck = a === 0 ? 'Вірно' : 'Невірно';

console.log(aCheck);

// Task№2
let a = Number(prompt('Введите число'));
let aCheck = a > 0 ? 'Вірно' : 'Невірно';

console.log(aCheck);

// Task№3
let a = Number(prompt('Введите число'));
let aCheck = a < 0 ? 'Вірно' : 'Невірно';

console.log(aCheck);

// Task№4
let a = Number(prompt('Введите число'));
let aCheck = a >= 0 ? 'Вірно' : 'Невірно';

console.log(aCheck);

// Task№5
let a = Number(prompt('Введите число'));
let aCheck = a <= 0 ? 'Вірно' : 'Невірно';

console.log(aCheck);

// Task№6
let a = Number(prompt('Введите число'));
let aCheck = a !== 0 ? 'Вірно' : 'Невірно';

console.log(aCheck);

// Task№7
let a = prompt('Введите число');
let aCheck = a === 'test' ? 'Вірно' : 'Невірно';

console.log(aCheck);

// Task№8
let a = prompt('Введите число');
let aCheck = a === '1' ? 'Вірно' : 'Невірно';

console.log(aCheck);

// Task№9
let a = prompt('Введите число');
let aCheck = a > 0 && a < 5 ? 'Вірно' : 'Невірно';

console.log(aCheck);

// Task№10
let a = Number(prompt('Введите число'));
let aCheck = a === 0 || a === 2  ? a + 7  :  a / 10;

console.log(aCheck);

// Task№11
let a = Number(prompt('Введите число'));
let b = Number(prompt('Введите число'));
let aCheck = a <= 1 && b >= 3  ? a + b  :  a - b;

console.log(aCheck);

// Task№12
let a = Number(prompt('Введите число'));
let b = Number(prompt('Введите число'));
let aCheck = a > 2 && a < 11 || b >= 6 && b < 14 ? 'Вірно' : 'Невірно';

console.log(aCheck);

// Task№13
let num = Number(prompt('Введите число 1 или 2 или 3 или 4 '));
let result;

switch (num){
    case 1:
        result = 'Зима';
        break;
    case 2:
        result = 'Весна';
        break;
    case 3:
        result = 'Лето';
        break;
    default:
        result = 'Осень';
}

alert(result);







