(function () {
  const getData = () => {
    const dataList = document.querySelector("#dataList");
    const getList = localStorage.getItem("formData");

    if (getList) {
      const dataUser = JSON.parse(getList);

      for (const key in dataUser) {
        const listItem = document.createElement("li");
        listItem.textContent = `${key}: ${dataUser[key]}`;
        dataList.appendChild(listItem);
      }
    } else {
      alert("Ошибка");
    }
  };

  const saveData = (data) => {
    localStorage.setItem("formData", JSON.stringify(data));
  };

  const formHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const { target } = e;
    const data = {};
    target
      .querySelectorAll("input, textarea, select")
      .forEach((item) => (data[item.name] = item.value));
    saveData(data);
    getData();
  };

  const loadedHandler = () => {
    const form = document.querySelector("#form");
    if (form) {
      form.addEventListener("submit", formHandler);
    }
    getData();
  };

  document.addEventListener("DOMContentLoaded", loadedHandler);
})();
