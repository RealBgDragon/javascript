const generate_button = document.getElementById("generateBtn");
const problem_label = document.getElementById("mathProblem");
const check_answer = document.getElementById("checkAnswerBtn");
const user_answer = document.getElementById("userAnswer");
const user_feedback = document.getElementById("feedbackMsg");
const dropdown = document.getElementById("difficulty");
const themeToggle = document.getElementById("theme-toggle");

let a, b;
let difficulty;

generate_button.addEventListener("click", function () {
    difficulty = dropdown.value;
    generate_problem();
    a = generate_problem();
    console.log(a);
});

function generate_problem() {
    const operators = ["+", "-", "*", "/"];
    let operation = operators[Math.floor(Math.random() * operators.length)];
    if (operation === "+") {
        a = Math.floor(Math.random() * (100 - 1) + 1);
        b = Math.floor(Math.random() * (100 - 1) + 1);
        c = a + b;
        problem_label.textContent = "x + " + b + " = " + c;
    } else if (operation === "-") {
        a = Math.floor(Math.random() * (100 - 1) + 1);
        b = Math.floor(Math.random() * (100 - 1) + 1);
        c = a - b;
        problem_label.textContent = "x - " + b + " = " + c;
    } else if (operation === "*") {
        a = Math.floor(Math.random() * (10 - 1) + 1);
        b = Math.floor(Math.random() * (10 - 1) + 1);
        c = a * b;
        problem_label.textContent = "x * " + b + " = " + c;
    } else if (operation === "/") {
        a = Math.floor(Math.random() * (10 - 1) + 1);
        b = Math.floor(Math.random() * (10 - 1) + 1);
        c = a / b;
        problem_label.textContent = "x / " + b + " = " + c;
    }
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
