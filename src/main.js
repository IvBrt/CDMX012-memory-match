import {App,bothArr} from "./components/App.js";

document.getElementById("root").appendChild(App());

const cardBack = document.querySelectorAll(".cardBack");
const cardFront = document.querySelectorAll(".cardFront");

cardBack.forEach((icon) => {
  icon.addEventListener("click", (e)=>{
    showCardFront(e)
    console.log(e)
  });
});

function hideCardFront() {
    cardFront.forEach((front)=>{
        front.style.display = "none"
    })
}
hideCardFront();

function showCardFront(event) {
  let idLab = event.currentTarget.id;

  for(let i = 0; i <= bothArr.length; i++){
    if(i == idLab){
      cardBack[i].style.display = "none";
      cardFront[i].style.display = "block";
    }
  }
}


function sameCards(match){
  let idBlack = match.currentTarget.id;
  console.log(idBlack);
  for (let i = 0; i < 3; i++){
    if(match[i].id != idBlack){
      console.log(idBlack);
    }
  }
}

