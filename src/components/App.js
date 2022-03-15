import allData from "../data/webdev/webdev.js";

const allDataClone = Object.assign({},allData);
allDataClone.name = 'Frontend Web Dev Clone';
console.log(allData,allDataClone);
const arraysTogether = allData.items.concat(allDataClone.items);
console.log(arraysTogether);


const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.textContent = 'Hola mundo!';

  return el;
};

export default App;
