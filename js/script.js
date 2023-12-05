(function () {
  const saveColor = () => {
    const selectedColor = document.querySelector(
      'input[name="colorScheme"]:checked',
    ).value;

    localStorage.setItem("colorScheme", selectedColor);
    addColor();
  };

  const addColor = () => {
    const getColor = localStorage.getItem("colorScheme");
    const darkRadio = document.querySelector('input[value="dark"]');

    if (getColor === "dark") {
      document.body.style.backgroundColor = "rgba(43,45,48,0.96)";
      if (darkRadio) {
        darkRadio.checked = true;
      }
    } else {
      document.body.style.backgroundColor = "#ffffff";
    }
  };

  const loadedHandler = () => {
    const form = document.querySelector("#colorForm");

    form.addEventListener("change", saveColor);

    addColor();
  };

  document.addEventListener("DOMContentLoaded", loadedHandler);
})();

// Task2
(function () {
  const createList = () => {
    const list = document.querySelector("#itemList");

    const data = JSON.parse(localStorage.getItem("data")) || [];

    list.innerHTML = "";

    data.forEach((item) => {
      const createLi = document.createElement("li");
      createLi.textContent = item.text;

      const createBtn = document.createElement("button");
      createBtn.classList.add("favorite-btn");
      createBtn.textContent = "Удалить из избранного";
      createBtn.addEventListener("click", function () {
        toggleFavorite(item.id);
      });

      createLi.appendChild(createBtn);
      list.appendChild(createLi);
    });
  };

  const toggleFavorite = (itemId) => {
    const data = JSON.parse(localStorage.getItem("data")) || [];

    const index = data.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      data.splice(index, 1);
    }

    localStorage.setItem("data", JSON.stringify(data));

    // Обновление интерфейса
    createList();
  };

  const addBtn = document.getElementById("addBtn");
  addBtn.addEventListener("click", function () {
    const newItemText = document.getElementById("newItemText").value;

    if (newItemText) {
      const data = JSON.parse(localStorage.getItem("data")) || [];
      const newItem = {
        id: Date.now(),
        text: newItemText,
      };
      data.push(newItem);
      localStorage.setItem("data", JSON.stringify(data));

      createList();

      document.getElementById("newItemText").value = "";
    }
  });

  document.addEventListener("DOMContentLoaded", createList);
})();
