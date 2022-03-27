import App from "./components/App.js";

document.getElementById("root").appendChild(App());

const cardBack = document.querySelectorAll(".cardBack");

cardBack.forEach((listener) => {
  listener.addEventListener("click", showCardFront);
});

function hideCardFront() {
  document.querySelector(".cardFront").style.display = "none";
}
hideCardFront();

function showCardFront() {
  document.querySelector(".cardFront").style.display = "block";
  document.querySelector(".cardBack").style.display = "none";
}
