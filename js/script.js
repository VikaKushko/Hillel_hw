'use strict';

// Task 1
let a = '';

for(let i = 10; i <= 20; i++){
    a += i;
    a += ',';
}
console.log(a);

// Task 2
for(let i = 10; i <= 20; i++){
    let s = i * i;
    console.log(s);
}

// Task 3
for(let i = 0; i <= 10; i++){
    let s = 7 * i;
    console.log('7' + ' * ' + i + ' = ' + s);
}

// Task 4
let sum = 0;

for(let i = 1; i <= 15; i++){
    sum += i;
}
console.log(sum);

// Task 5
let sum = 1;

for(let i = 15; i <= 35; i++){
    sum *= i;
}
console.log(sum);

// Task 6
let sum = 1;

for(let i = 1; i <= 500; i++){
    sum += i;
}
let s = sum/500;
console.log(s);

// Task 7
let sum = 0;

for(let i = 30; i <= 80; i++){
    if (i % 2 === 0){
        sum += i;
    }
}
console.log(sum);

// Task 8
for(let i = 100; i <= 200; i++){
    if (i % 3 === 0){
        console.log(i);
    }
}

// Task 9
let n = 36;

for(let i = 1; i <= n; i++){
    if (n % i === 0){
        console.log(i);
    }
}

// Task 10
let n = 36;
let c = 0;

for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 0) {
        c++;
    }
}
console.log(c);

// Task 11
let n = 36;
let c = 0;

for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        c += i;
    }
}
console.log(c);

// Task 12
for(let i = 0; i <= 10; i++){
    for (let k = 0; k <= 10; k++){
        let p = i * k;
        console.log(i + ' * ' + k + ' = '+ p);
    }
    console.log('');
}