Дописати функцію flat так щоб вона повертала правильне значення

const arr = [
1, 2, 3, 4, {},
[1, 2, 3],
[1, 2, 3],
[3, 4,
[5, 6, 7]
]
]



function outerFlat() {
let res = []
return function flat(arr) {
for(let i = 0; i < arr.length; i++) {
if(Array.isArray(arr[i])) {
flat(arr[i], res)
} else {
res.push(arr[i])
}
}
return res;
}
}

const flat = outerFlat()
console.log(flat(arr));
console.log(flat(arr));