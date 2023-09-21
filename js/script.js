'use strict';

const firstNumber = parseFloat(prompt('Введите первое число '));
const secondNumber = parseFloat(prompt('Введите второе число '));

const sum = firstNumber + secondNumber;
console.log(`Результат: ${firstNumber} + ${secondNumber} = ${sum}`);

const difference = firstNumber - secondNumber;
console.log(`Результат: ${firstNumber} - ${secondNumber} = ${difference}`);

const multiplication = firstNumber * secondNumber;
console.log(`Результат: ${firstNumber} * ${secondNumber} = ${multiplication}`);


if(secondNumber && firstNumber !== 0){
    const division = firstNumber / secondNumber;
    console.log(`Результат: ${firstNumber} / ${secondNumber} = ${division}`);
}else{
    console.log('На ноль делить нельзя!!!!!!!!!!!');
}








