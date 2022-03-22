import allData from "../data/webdev/webdev.js";

const allDataClone = Object.assign({}, allData);
allDataClone.name = "Frontend Web Dev Clone";
//console.log(allData, allDataClone);
const bothArr = allData.items.concat(allDataClone.items);
//console.log(bothArr);

function shuffle (arr){
  for(let i = arr.length-1; i>0; i--){
    let h = Math.floor(Math.random()*(i+1));
    [arr[i],arr[h]]=[arr[h],arr[i]];
  }
  console.log(arr)
}

shuffle(bothArr);

const App = () => {
  const el = document.createElement("div");

  for (let i = 0; i < bothArr.length; i++) {
    //console.log(i);
    el.className = "App";
    el.innerHTML += `<img src="${bothArr[i].image}">`;
  }

  return el;
};

export default App;
