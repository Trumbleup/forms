const email = document.getElementById("email");
const country = document.getElementById("country");
const zipCode = document.getElementById("zipCode");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");


const showError = (element) => {
    inputError = element;
    inputError.textContent = "Please fill out field correctly";
    inputError.className = "error active"
}

const checkValidity = (e) => {
    const inputID = e.target.id;
    const input = document.getElementById(inputID);
    const inputError = document.querySelector(`#${inputID} + span.error`);
    if (input.validity.valid) {
        inputError.textContent = "";
        inputError.className = "error";
    } else {
        showError(inputError);
    }
}

email.addEventListener("input", checkValidity);
country.addEventListener("input", checkValidity);
zipCode.addEventListener("input", checkValidity);
password.addEventListener("input", checkValidity);
passwordConfirm.addEventListener("input", checkValidity);