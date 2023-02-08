const burger = document.querySelector(".burger");
const modal = document.querySelector(".modal");
const hidden = document.querySelector(".hidden");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

burger.addEventListener("click", openModal);

overlay.addEventListener("click", closeModal);
