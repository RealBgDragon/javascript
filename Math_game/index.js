const generate_button = document.getElementById("generateBtn");
const problem_label = document.getElementById("mathProblem");
const check_answer = document.getElementById("checkAnswerBtn");
const user_answer = document.getElementById("userAnswer");
const user_feedback = document.getElementById("feedbackMsg");
const dropdown = document.getElementById("difficulty");
const themeToggle = document.getElementById("theme-toggle");

let a, b;
let difficulty;

function generate_problem() {
    const operators = ["+", "-", "*", "/"];
    let operation = operators[Math.floor(Math.random() * operators.length)];
    console.log(difficulty);

    switch (difficulty) {
        case "easy":
            if (operation === "+" || operation === "-") {
                a = Math.floor(Math.random() * 101);
                b = Math.floor(Math.random() * 101);
            } else {
                a = Math.floor(Math.random() * 11);
                b = Math.floor(Math.random() * 11);
            }
            break;
        case "medium":
            if (operation === "+" || operation === "-") {
                a = Math.floor(Math.random() * 501);
                b = Math.floor(Math.random() * 501);
            } else {
                a = Math.floor(Math.random() * 21);
                b = Math.floor(Math.random() * 21);
            }
            break;
        case "hard":
            switch (operation) {
                case "exponent":
                    a = Math.floor(Math.random() * 6) + 2; // 2 to 7
                    b = Math.floor(Math.random() * 3) + 2; // 2 to 4
                    c = Math.pow(a, b);
                    problem_label.textContent = "x^" + b + " = " + c;
                    break;
                case "root":
                    a = Math.floor(Math.random() * 15) + 2; // 2 to 16
                    c = a * a;
                    problem_label.textContent = "√x = " + a;
                    break;
                case "equation":
                    a = Math.floor(Math.random() * 10) + 1; // 1 to 10
                    b = Math.floor(Math.random() * 10) + 1; // 1 to 10
                    let d = Math.floor(Math.random() * 10) + 1; // another random number
                    c = a * d + b;
                    problem_label.textContent = a + "x + " + b + " = " + c;
                    break;
                default:
                    a = Math.floor(Math.random() * 1001);
                    b = Math.floor(Math.random() * 1001);
                    break;
            }
            break;
        default:
            console.error("Invalid difficulty level");
            return;
    }

    if (operation === "+") {
        c = a + b;
        problem_label.textContent = "x + " + b + " = " + c;
    } else if (operation === "-") {
        c = a - b;
        problem_label.textContent = "x - " + b + " = " + c;
    } else if (operation === "*") {
        if (difficulty === "hard") {
            generate_problem();
        }
        c = a * b;
        problem_label.textContent = "x * " + b + " = " + c;
    } else if (operation === "/") {
        while (b === 0) {
            // Ensure b isn't 0 for division.
            b = Math.floor(Math.random() * 21);
        }
        c = a / b;
        problem_label.textContent = "x / " + b + " = " + c.toFixed(2); // Display up to 2 decimal places
    }
    // The "exponent", "root", and "equation" cases are already handled above.
    return a;
}

check_answer.addEventListener("click", function () {
    if (parseInt(user_answer.value) === a) {
        user_feedback.textContent = "Correct!";
        user_feedback.classList.add("correct");
    } else {
        user_feedback.textContent = "Wrong!";
        user_feedback.classList.remove("correct");
    }
});

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
//cockie
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

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

generate_button.addEventListener("click", function () {
    difficulty = dropdown.value;
    generate_problem();
});
