const winner = $("#winner_label");
const choiceBtns = document.querySelectorAll(".my-button");
const themeToggle = document.getElementById("theme-toggle");

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

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
        if (
            buttonValues[combination[0]] &&
            buttonValues[combination[0]] === buttonValues[combination[1]] &&
            buttonValues[combination[1]] === buttonValues[combination[2]]
        ) {
            win = true;

            if (buttonValues[combination[0]] === "X") {
                $("#winner_label").text("Player 1 Wins!");
            } else if (buttonValues[combination[0]] === "O") {
                $("#winner_label").text("Player 2 Wins!");
            }

            // Optionally, disable all buttons after finding a winner
            for (const btn of choiceBtns) {
                btn.disabled = true;
            }

            break;
        }
    }

    // Check for a draw if all positions are occupied and there's no winner
    if (!win && buttonValues.every((val) => val !== "")) {
        $("#winner_label").text("It's a Draw!");
    }
}

themeToggle.addEventListener("click", function () {
    let body = document.body;

    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        themeToggle.textContent = "☀️"; // Sun icon for light mode
    } else {
        body.classList.add("dark-mode");
        themeToggle.textContent = "🌙"; // Moon icon for dark mode
    }
});
