import { App, bothArr } from "./components/App.js";

document.getElementById("root").appendChild(App());

const cardBack = document.querySelectorAll(".cardBack");
const cardFront = document.querySelectorAll(".cardFront");

let idL = 0;
let count = 0;
let selectId = "";

cardBack.forEach((icon) => {
  icon.addEventListener("click", showCardFront);
});

function hideCardFront() {
  cardFront.forEach((front) => {
    front.style.display = "none";
  });
}
hideCardFront();

function showCardFront(event) {
  let idBack = event.currentTarget.id;
  count++;

  for (let i = 0; i <= bothArr.length; i++) {
    if (i == idBack) {
      cardBack[i].style.display = "none";
      cardFront[i].style.display = "block";

      if (count == 1) {
        selectId = cardFront[i].id; // se guarda el id de cardFront del primer clic
        idL = idBack; //Se guard el id del primer clic
      } else if (count == 2) {
        // count == 2 es del segundo clic
        if (selectId != cardFront[i].id) {
          console.log("hi");

          cardBack[idL].style.display = "block";
          cardFront[idL].style.display = "none";

          cardBack[idBack].style.display = "block";
          cardFront[idBack].style.display = "none";
        }
        //Reseteamos valores iniciale para el flujo
        count = 0;
        idL = 0;
        selectId = "";
      }
    }
  }
}
