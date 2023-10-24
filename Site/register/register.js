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

$("#password, #repassword").on("focus input", function () {
    if (password.val() === rePassword.val()) {
        // continue to register
        passwordError.hide();
        buttonEnable();
    } else {
        passwordError.text("Passwords do not match!").show();
        buttonDisable();
    }
});

// const for password check
const capitalRequirement = $("#capitalLetter");
const numberRequirement = $("#number");
const modal = $("#myModal");
const lettars = $("#lettars");
const modalBody = $(".modal-body");
// end of const for password check

password.on("focus input", function () {
    modalBody.show();

    if (/[A-Z]/.test($(this).val())) {
        capitalRequirement.css("color", "green");
    } else {
        capitalRequirement.css("color", "red");
    }

    if (/[0-9]/.test($(this).val())) {
        numberRequirement.css("color", "green");
    } else {
        numberRequirement.css("color", "red");
    }

    if (password.val().length < 8) {
        lettars.css("color", "red");
    } else {
        lettars.css("color", "green");
    }
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
