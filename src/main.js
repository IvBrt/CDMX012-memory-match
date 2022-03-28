import {App,bothArr} from "./components/App.js";

document.getElementById("root").appendChild(App());

const cardBack = document.querySelectorAll(".cardBack");
const cardFront = document.querySelectorAll(".cardFront");

cardBack.forEach((icon) => {
  icon.addEventListener("click", showCardFront);
});

function hideCardFront() {
    cardFront.forEach((front)=>{
        front.style.display = "none"
    })
}
hideCardFront();

function showCardFront(event) {
  let idLabo = event.currentTarget.id;

  for(let i = 0; i <= bothArr.length; i++){
    if(i == idLabo){
      cardBack[i].style.display = "none";
      cardFront[i].style.display = "block"
    }
  }
}
