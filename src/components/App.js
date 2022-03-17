import allData from "../data/webdev/webdev.js";

const allDataClone = Object.assign({},allData);
allDataClone.name = 'Frontend Web Dev Clone';
console.log(allData,allDataClone);
const arraysTogether = allData.items.concat(allDataClone.items);
console.log(arraysTogether[0].image);


const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.innerHTML =`<img src="${arraysTogether[6].image}"></img>`;


  return el;
};

export default App;