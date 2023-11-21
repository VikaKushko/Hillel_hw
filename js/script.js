const list = document.querySelector("ul");
const arr = [];

for (const attribute of list.attributes) {
  arr.push(attribute.value);
}

console.log(arr);

const list = document.getElementById("ulId");
const lastElement = list.lastElementChild;
lastElement.textContent = "Привет меня зовут Vika";

const list = document.getElementById("ulId");
const firstElement = list.firstElementChild;
firstElement.setAttribute("data-my-name", "vika");

const list = document.getElementById("ulId");
list.removeAttribute("data-dog-tail");
