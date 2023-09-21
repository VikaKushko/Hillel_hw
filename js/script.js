'use strict';

const firstNumber = parseFloat(prompt('Введите первое число'));
const secondNumber = parseFloat(prompt('Введите второе число'));
const mathematicalOperation = prompt('Что нужно сделать (add, sub, mult, div)?');
let operationSymbol;
let result;

if(mathematicalOperation === 'add'){
    result = firstNumber + secondNumber;
    operationSymbol = "+";
} else if(mathematicalOperation === 'sub'){
    result = firstNumber - secondNumber;
    operationSymbol = "-";
} else if(mathematicalOperation === 'mult'){
    result = firstNumber * secondNumber;
    operationSymbol = "*";
} else if(mathematicalOperation === 'div'){
    result = firstNumber / secondNumber;
    operationSymbol = "/";
}
alert(firstNumber + " " + operationSymbol + " " + secondNumber + " = " + result);







