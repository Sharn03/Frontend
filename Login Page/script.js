const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInput();
});

function validateInput() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();

    if (usernameVal === '') {
        setError(username, "Username is required");
    } else {
        setSuccess(username);
    }

    if (emailVal === '') {
        setError(email, "Email is required");
    } else if (!validateEmail(emailVal)) {
        setError(email, "Enter a valid email");
    } else {
        setSuccess(email);
    }

    if (passwordVal === '') {
        setError(password, "Password is required");
    } else if (passwordVal.length < 8) {
        setError(password, "Your password must be at least 8 characters");
    } else {
        setSuccess(password);
    }
}

function setError(element, message) {
    const errorElement = element.nextElementSibling;
    errorElement.innerText = message;
    element.classList.add('error');
    element.classList.remove('success');
}

function setSuccess(element) {
    const errorElement = element.nextElementSibling;
    errorElement.innerText = "";
    element.classList.add('success'); 
    element.classList.remove('error');
}


function validateEmail(email) {
    
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
