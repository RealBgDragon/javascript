const password = $("#password");
const repassword = $("#repassword");
const submit = $("#submit");
const passwordError = $("#passwordError");

submit.on("click", function (event) {
    event.preventDefault();
    if (password.val() === repassword.val()) {
        // continue to register
        passwordError.hide();
        //! DO NOT FORGET TO REMOVE PRINT
        console.log("valid");
        return;
    } else {
        passwordError.text("Passwords do not match!").show();
        passwordError;
        //! DO NOT FORGET TO REMOVE PRINT
        console.log("not valid");
    }
});
