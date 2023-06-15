const playerText = $("#playerPick");
const cpuText = $("#cpuPick");
const resultText = $("#resultText");
const choiseBtns = document.querySelectorAll(".my-button");

let cpuPick;
let playerPick;

choiseBtns.forEach((button) =>
    button.addEventListener("click", (event) => {
        event.preventDefault();
        playerPick = button.textContent;
        computerTurn();
        playerText.textContent = "Player choise is: ${player}";
    })
);

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3 + 1);

    switch (randNum) {
        case 1:
            cpuPick = "ROCK";
            break;
        case 2:
            cpuPick = "PAPER";
            break;
        case 3:
            cpuPick = "SCISSORS";
            break;
    }
}
