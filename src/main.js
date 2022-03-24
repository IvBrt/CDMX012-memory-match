import App from './components/App.js';

document.getElementById('root').appendChild(App()).style.display = "none";

const imgLab = document.getElementById("lab");

function showCard(){
    document.getElementById('root').appendChild(App()).style.display = "block";
    document.querySelector(".cardBack").style.display ="none";
}

imgLab.addEventListener("click",showCard);