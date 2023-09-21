const winner = $("#winner_label");
const choiceBtns = document.querySelectorAll(".my-button");
const themeToggle = document.getElementById("theme-toggle");
const player_ai_button = document.getElementById("player-ai");

let x = 0,
    z;
let win = false;
let player1Pick, player2Pick;
let mode;
let random = 0;

//the pressing of the button
choiceBtns.forEach((button) =>
    button.addEventListener("click", (event) => {
        event.preventDefault();
        mode = player_ai_button.textContent;
        if (button.textContent === "") {
            player_move(button.id);
        } else {
            return;
        }
        winner_conditions();
        console.log(`button pressed ${player1Pick}`);
    })
);

//player making move
function player_move(z) {
    if (x % 2 === 0) {
        player1Pick = z;
        $("#" + player1Pick).text("X");
        winner_conditions();
        if (mode === "AI" && win === false) {
            do {
                random = Math.floor(Math.random() * 9) + 1;
                console.log(random);
            } while (
                document.getElementById("button" + random).textContent !== ""
            );
            $("#button" + random).text("O");
            x++;
        }
    } else if (x % 2 !== 0 && mode === "P2") {
        player2Pick = z;
        $("#" + player2Pick).text("O");
    }
    x++;
}

//winner function
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

    //determenign if there is a winner
    for (const combination of winningCombinations) {
        if (
            buttonValues[combination[0]] &&
            buttonValues[combination[0]] === buttonValues[combination[1]] &&
            buttonValues[combination[1]] === buttonValues[combination[2]]
        ) {
            win = true;

            //picking the winner
            if (buttonValues[combination[0]] === "X") {
                $("#winner_label").text("Player 1 Wins!");
            } else if (buttonValues[combination[0]] === "O") {
                $("#winner_label").text("Player 2 Wins!");
            }

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

//check on load
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = checkCookie("theme");

    if (savedTheme) {
        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
            themeToggle.textContent = "🌙";
        } else {
            document.body.classList.remove("dark-mode");
            themeToggle.textContent = "☀️";
        }
    }
});

//light and dark mode
themeToggle.addEventListener("click", function () {
    let body = document.body;

    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        themeToggle.textContent = "☀️"; // Sun icon for light mode
        setCookie("theme", "light", 30); // for 30 days
    } else {
        body.classList.add("dark-mode");
        themeToggle.textContent = "🌙"; // Moon icon for dark mode
        setCookie("theme", "dark", 30);
    }
});

player_ai_button.addEventListener("click", function () {
    if (player_ai_button.textContent === "P2") {
        player_ai_button.textContent = "AI";
        console.log("AI");
    } else {
        player_ai_button.textContent = "P2";
    }
});

//TODO add a button to reset the field
//$("#" + player1Pick).text("X");

//*making a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
//get the Cookie
function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}

function checkCookie(name) {
    const theme = getCookie(name);
    if (theme) {
        return theme;
    } else {
        return false;
    }
}
