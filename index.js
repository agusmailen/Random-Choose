const decisionUno = document.getElementById("option-uno");
const decisionDos = document.getElementById("option-dos");
const button = document.getElementById("decide");
const container = document.querySelector(".container-answer");
const ans = document.querySelector(".answer");
const parent = document.querySelector(".box-ans");
const replayBtn = document.querySelector("#replay");

const randomize = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const tomarDecision = () => !randomize(0,1) ? showAnswer(decisionUno.value) : showAnswer(decisionDos.value);  

const showAnswer = (answer) => {
    container.style.display = "flex";
    ans.innerHTML = '';
    ans.appendChild(document.createTextNode(answer));
}

const replay = () => {
    ans.innerHTML = '';
    decisionUno.value = '';
    decisionDos.value = '';
    container.style.display = 'none';
}

button.addEventListener("click", tomarDecision);
replayBtn.addEventListener('click', replay);