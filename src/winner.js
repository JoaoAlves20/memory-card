const message = document.querySelector(".message");
const seconds = document.querySelector(".seconds");
const button = document.querySelector(".index");

const namePlayer = localStorage.getItem("player");
const timer = localStorage.getItem("timer");

message.innerHTML = `Parabéns, ${namePlayer}!`;
seconds.innerHTML = `Você concluiu em ${timer} segundos!`;

button.addEventListener("click", () => {
    window.location = "../index.html";
});