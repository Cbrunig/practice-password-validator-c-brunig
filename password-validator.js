const readline = require('readline-sync');

let password = readline.question("Please enter a new password. Your password must be at least 8 characters long and contain:\nOne uppercase letter\nOne number\nNew Password: ");

let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "1234567890";
let hasUppercase = false;
let hasNumber = false;
let isValid = false;

do {
    while (password.length < 8) { //check length
        password = readline.question("Your password must be at least 8 characters long, please try again.\nNew Password: ");
    }

    while (!hasUppercase) {
        for (let letter of password) { //check for uppercase letter
            if (uppercaseLetters.includes(letter)) {
                hasUppercase = true;
                break;
            }
        }
        if (!hasUppercase)
            password = readline.question("Your password must include at least one uppercase letter, please try again.\nNew Password: ");
    }

    while (!hasNumber) {
        for (let letter of password) { //check for a number
            if (numbers.includes(letter)) {
                hasNumber = true;
                break;
            }
        }
        if (!hasNumber)
            password = readline.question("Your password must include at least one number, please try again.\nNew Password ");
    }
    if (hasUppercase && hasNumber && password.length > 8) //checking all conditions
        isValid = true;
   
} while (isValid = false);

console.log("Your new password has been set.");