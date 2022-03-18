import allData from "../data/webdev/webdev.js";

const allDataClone = Object.assign({}, allData);
allDataClone.name = "Frontend Web Dev Clone";
console.log(allData, allDataClone);
const arraysTogether = allData.items.concat(allDataClone.items);
console.log(arraysTogether);

const App = () => {
  const el = document.createElement("div");

  for (let i = 0; i < arraysTogether.length; i++) {
    console.log(i);
    let images = arraysTogether[i].image;
    el.className = "App";
    el.innerHTML = `
    <img src="${images}"></img>
    `;
    //<h1>${arraysTogether[i].id}</h1>
  }

  return el;
};

export default App;
