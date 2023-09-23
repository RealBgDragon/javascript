const generate_button = document.getElementById("generateBtn");
const problem_label = document.getElementById("mathProblem");
const check_answer = document.getElementById("checkAnswerBtn");
const user_answer = document.getElementById("userAnswer");
const user_feedback = document.getElementById("feedbackMsg");

let a, b;

generate_button.addEventListener("click", function () {
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
    } else {
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
