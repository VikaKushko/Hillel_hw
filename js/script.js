// // Task1
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector("[data-modal]");
  const modalImg = document.querySelector("[data-modal-img]");
  const modalClose = document.querySelector("[data-modal-close]");
  const galleryImg = document.querySelector("[data-img]");

  function openModal() {
    modal.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  // Додайте подію кліку на зображення галереї
  galleryImg.addEventListener("click", function () {
    modalImg.src = this.src;
    openModal();
  });

  modalClose.addEventListener("click", closeModal);

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
});

//Task2
document.addEventListener("DOMContentLoaded", () => {
  const t = document.querySelector(".tabs");

  t.addEventListener("click", (event) => {
    const clickTb = event.target.closest(".tab");

    const getId = clickTb.getAttribute("data-tab-id");
    const r = document.querySelectorAll(".content");

    r.forEach((content) => {
      content.style.display = "none";
    });

    document.getElementById(getId).style.display = "block";
  });
});
