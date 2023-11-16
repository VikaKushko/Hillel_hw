const list = document.querySelectorAll("li");

for (const item of list) {
  console.log(item.textContent);
}

console.log(`Количество елементов ${list.length}`);

const arr = [];
for (const item of list) {
  arr.push(item.textContent);
}
console.log(arr);
