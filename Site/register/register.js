// const for password match
const password = $("#password");
const rePassword = $("#repassword");
const passwordError = $("#passwordError");
const submit = $("#submit");
// end of const for password match

function buttonDisable() {
    submit.prop("disabled", true);
}

function buttonEnable() {
    submit.prop("disabled", false);
}

if (password.val() === "") {
    buttonDisable();
}

function PasswordCheck() {
    if (/[A-Z]/.test(password.val())) {
        capitalRequirement.css("color", "green");
        buttonEnable();
    } else {
        capitalRequirement.css("color", "red");
        buttonDisable();
    }

    if (/[0-9]/.test(password.val())) {
        numberRequirement.css("color", "green");
        buttonEnable();
    } else {
        numberRequirement.css("color", "red");
        buttonDisable();
    }

    if (password.val().length >= 8) {
        letters.css("color", "green");
        buttonEnable();
    } else {
        letters.css("color", "red");
        buttonDisable();
    }
}

//TODO ADD a function to check for ANY empty fields

$("#password, #repassword").on("focus input", function () {
    if (password.val() === rePassword.val() && password.val() !== "") {
        // continue to register
        passwordError.hide();
        buttonEnable();
    } else {
        passwordError.text("Passwords do not match!").show();
        buttonDisable();
    }
    PasswordCheck();
});

// const for password check
const capitalRequirement = $("#capitalLetter");
const numberRequirement = $("#number");
const modal = $("#myModal");
const letters = $("#letters");
const modalBody = $(".modal-body");
// end of const for password check

password.on("focus input", function () {
    modalBody.show();
    PasswordCheck();
});

// When losing focus
password.on("blur", function () {
    if (!password.is(":hover")) {
        modalBody.hide();
    }
});

// Hover tooltip stays visible even after the input loses focus
password.hover(null, function () {
    if (!password.is(":focus")) {
        modalBody.hide();
    }
});

submit.on("click", function (event) {
    event.preventDefault();
    console.log("button clicked");
});
