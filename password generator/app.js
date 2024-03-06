const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";


const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const passwordEl = document.getElementById("password");

const generatePassword = () => {
    const length = lengthEl.value;
    let charatcters = "";
    let password = "";

    if (uppercaseEl.checked) {
        charatcters += uppercaseLetters;
    } 
    if (lowercaseEl.checked) {
        charatcters += lowercaseLetters;
    }
    if (numbersEl.checked) {
        charatcters += numbers;
    }
    if (symbolsEl.checked) {
        charatcters += symbols;
    }

    for (let i = 0; i < length; i++) {
        password += charatcters.charAt(Math.floor(Math.random() * charatcters.length));
    }
    passwordEl.value = password;
}

generateBtn.addEventListener("click", generatePassword);
