'use strict';


// Task 1
for (let i = 20; i <= 30; i = i + 0.5){
    console.log(i);
}

// Task 2
for (let i = 10; i <= 100; i += 10){
    let s = i * 27;
    console.log(s);
}

// Task 3
for (let i = 10; i <= 100; i += 10) {
    let s = i * 27;
    console.log(s);
}

// Task 4
let n = 1;

if (n <= 1){
    console.log('Число не є простим');
}else {
    let k = true;
    for (let i = 2; i <= n; i++) {
        if (n % i === 0){
            k = false;
        }
    }
    if (k) {
        console.log('Число є простим');
    } else {
        console.log('Число не є простим');
    }
}

// Task 5
let n = 10;
let b = 1;

while (b < n) {
    b *= 3;
}

if (b === n) {
    console.log("Можна отримати це число зведенням числа 3 у деякий ступінь");
} else {
    console.log("Не можна отримати це число зведенням числа 3 у деякий ступінь");
}


