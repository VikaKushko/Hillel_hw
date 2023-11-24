document.addEventListener("DOMContentLoaded", () => {
  const f = document.querySelector("[data-focus-form]");
  const d = document.querySelector("[data-focus-block]");

  f.addEventListener("focus", () => {
    d.style.display = "block";
  });

  f.addEventListener("blur", () => {
    d.style.display = "none";
  });
});
