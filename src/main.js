import App from './components/App.js';

document.getElementById('root').appendChild(App());
const chale = document.getElementById("again");

function showCardBack(){
    document.querySelector(".cardBack").style.display = "none";
}

chale.addEventListener("click", showCardBack);