let firstNumber = parseFloat(prompt('Введите первое число'));
let secondNumber = parseFloat(prompt('Введите второе число'));
let mathematicalOperation = prompt('Что нужно сделать (add, sub, mult, div)?');
let operationSymbol;

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







