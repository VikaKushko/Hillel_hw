const createTable = () => {
  const table = document.createElement("table");

  for (let i = 1; i <= 10; i++) {
    const tr = table.insertRow();

    for (let j = 1; j <= 10; j++) {
      const td = tr.insertCell();
      const value = (i - 1) * 10 + j;
      td.textContent = value;
    }
  }
  document.body.appendChild(table);
};
createTable();
