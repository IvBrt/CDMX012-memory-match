import allData from "../data/webdev/webdev.js";

const allDataClone = Object.assign({}, allData);
allDataClone.name = "Frontend Web Dev Clone";
//console.log(allData, allDataClone);
const bothArr = allData.items.concat(allDataClone.items);
//console.log(bothArr);
const App = () => {
  const el = document.createElement("div");

  for (let i = 0; i < bothArr.length; i++) {
    //console.log(i);
    el.className = "cards";
    el.innerHTML += `
    <div class="front"><img id="${bothArr[i].id}" src="${
      bothArr[i].image
    }" class="cardFront"></div>
    <div class="back"><img id=${i} src="${"labo.png"}" class="cardBack"></div>`;
  }
  return el;
};

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let h = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[h]] = [arr[h], arr[i]];
  }
  //console.log(arr);
}

shuffle(bothArr);

export { App, bothArr };
