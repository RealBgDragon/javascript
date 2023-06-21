const playerText = $("#playerPick");
const cpuText = $("#cpuPick");
const resultText = $("#resultText");
const choiseBtns = document.querySelectorAll(".my-button");

let cpuPick;
let playerPick;
let winner;

const gameOptions = ["ROCK", "PAPER", "SCISSORS"];
const gameRules = {
    ROCK: "SCISSORS",
    PAPER: "ROCK",
    SCISSORS: "PAPER",
};

choiseBtns.forEach((button) =>
    button.addEventListener("click", (event) => {
        event.preventDefault();
        playerPick = button.textContent;
        computerTurn();
        $("#playerPick").text(`Player choise is: ${playerPick}`);
        console.log(playerPick);
        $("#cpuPick").text(`CPU choise is ${cpuPick}`);
        console.log(`CPU ${cpuPick}`);
        winner = Winner();
        $("#resultText").text(`Winner is ${winner}`);
    })
);

function computerTurn() {
    cpuPick = gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

function Winner() {
    if (playerPick === cpuPick) {
        return "Draw";
    } else {
        return gameRules[playerPick] === cpuPick ? "Player" : "CPU";
    }
}
