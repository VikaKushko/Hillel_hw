const generateList = (array) => {
  const list = document.createElement("ul");

  for (const ele of array) {
    const liElement = document.createElement("li");

    if (Array.isArray(ele)) {
      const attachment = generateList(ele);
      liElement.appendChild(attachment);
    } else {
      liElement.textContent = ele;
    }

    list.appendChild(liElement);
  }

  return list;
};

const arr = [1, 2, [1.1, 1.2, 1.3], 3];
document.body.appendChild(generateList(arr));
