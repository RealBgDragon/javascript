const winner = $("#winner_label");
const choiceBtns = document.querySelectorAll(".my-button");

let x = 0,
    z;
let win = false;
let player1Pick, player2Pick;

choiceBtns.forEach((button) =>
    button.addEventListener("click", (event) => {
        event.preventDefault();
        if (button.textContent === "") {
            player_move(button.id);
        } else {
            return;
        }
        winner_conditions();
        console.log(`button pressed ${player1Pick}`);
    })
);

function player_move(z) {
    if (x % 2 === 0) {
        player1Pick = z;
        $("#" + player1Pick).text("X");
    } else {
        player2Pick = z;
        $("#" + player2Pick).text("O");
    }
    x++;
}

function winner_conditions() {
    let buttonValues = [];
    choiceBtns.forEach((button) => {
        buttonValues.push(button.textContent);
    });
    console.log(buttonValues);

    let positions = [];

    for (let i = 0; i < buttonValues.length; i++) {
        if (buttonValues[i] === "X") {
            positions.push(i);
        }
    }

    for (let i = 0; i < positions.length - 1; i++) {
        if (!positions[i + 1] - positions[i] !== 1) {
            win = true;
            console.log(win);
        }
    }
}
