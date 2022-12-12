// Form
const form = document.getElementById('form');

// Passwords
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

// Submit Button
const submitBtn = document.querySelector('button');

// Message & Message Container
const message = document.getElementById('message');
const messageContainer = document.querySelector('.message-container');

let isValid = false;
let passwordMatch = false;

const messageBox = [
    {
        msg: "Please fill out all fields",
        color: "red"
    },
    {
        msg: "Successful!",
        color: "#b3ff66"
    }
];

function resetForm(){
    form.reset();
}

function passwordValidate(){
    if(password1.value === password2.value){
        passwordMatch = true;
        message.textContent = "Password confirmed";
        message.style.color = messageBox[1].color;
        messageContainer.style.borderColor = messageBox[1].color;
        password1.style.borderColor = messageBox[1].color;
        password2.style.borderColor = messageBox[1].color;
        submitBtn.removeAttribute('disabled');
    } else {
        passwordMatch = false;
        message.textContent = "Don't Match. Check Passwords";
        message.style.color = messageBox[0].color;
        messageContainer.style.borderColor = messageBox[0].color;
        password1.style.borderColor = messageBox[0].color;
        password2.style.borderColor = messageBox[0].color;
        submitBtn.setAttribute('disabled', true);
    }
}

function validateForm(){
    isValid = form.checkValidity();
    if(isValid && passwordMatch) {
        message.textContent = messageBox[1].msg;
        messageContainer.style.color = messageBox[1].color;
        messageContainer.style.borderColor = messageBox[1].color;
        resetForm();
    } else {
        message.textContent = messageBox[0].msg;
        messageContainer.style.color = messageBox[0].color;
        messageContainer.style.borderColor = messageBox[0].color;
    }
}

function getData(e){
    e.preventDefault();
    let webURL = website.value;
    if(!webURL.includes('http://') && !webURL.includes('https://')){
        webURL = `https://${webURL}`;
    }
    const user = {
        name: fullName.value,
        phone: phone.value,
        email: email.value,
        websiteURL: webURL
    }
    validateForm();
    console.log(user);
}

form.addEventListener('submit', getData);
password2.addEventListener('change', passwordValidate);