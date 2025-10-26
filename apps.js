const passwordBox = document.getElementById("password");


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const char = "!@#$%^^&*()_+}{|:";

const allChar = upperCase + lowerCase + number + char;
const length = "12";

function generatePassword() {
    let password = " ";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += char[Math.floor(Math.random() * char.length)];

    while (length > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    
    }
    passwordBox.value = password;
}



function copyPassword (){

}