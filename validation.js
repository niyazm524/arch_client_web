// Паттерн Factory
function validateForm(validateType){
    let firstName = document.getElementById("first-name-input").value
    let email = document.getElementById("login-input").value
    let password = document.getElementById("password-input").value
    // Проверка типа валидации
    switch(validateType) {
        case "sign_up":
            // Случай регистрации
            return validateField(password) && validateField(firstName) && validateEmail(email);
            break;
        case "sign_in":
            // Случай логина
            return validateField(password) && validateEmail(email);
            break;

    }
}

function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validateField(field){
    return field.length >= 3;
}