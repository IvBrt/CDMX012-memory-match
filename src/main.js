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

function showCardFront(index) {
  let idLabo = index.currentTarget.id;

  for(let i = 0; i <= bothArr.length; i++){
    if(i == idLabo){
      cardBack[i].style.display = "none";
      document.getElementById("idFront"+i).style.display = "block"
    }
  }

  alert("hello")
  // bothArr
  // document.getElementsById(idex).appendChild(App());
  // cardFront.style.display = "block";
  // cardBack.style.display = "none";
}
