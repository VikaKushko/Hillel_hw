document.addEventListener("DOMContentLoaded", () => {
  const name = "img/";
  const arrImg = ["1.jpeg", "2.jpeg", "3.jpeg, '4.jpeg", "5.jpeg"];

  const random = Math.random() * arrImg.length;

  const result = name + arrImg[random];

  const image = document.querySelector("[data-ren-img]");

  image.src = result;
});
