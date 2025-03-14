const readline = require('readline-sync');

let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "1234567890";
let isValid = false;

do {
    
    let password = readline.question("Please enter a new password. Your password must be at least 8 characters long and contain:\nOne uppercase letter\nOne number\nNew Password: ");
    let hasUppercase = false;
    let hasNumber = false;
    
    for (let letter of password) { //check for uppercase letter
        if (uppercaseLetters.includes(letter)) {
            hasUppercase = true;
        }
        if (numbers.includes(letter)) {
            hasNumber = true;
        }
    }
  
    if (hasUppercase && hasNumber && (password.length > 7)) //checking all conditions
        isValid = true;
    else {
       console.log("Invalid password. Make sure it is at least 8 characters long and contains at least one uppercase letter and one number.");
    }
   
} while (!isValid);

console.log("Your new password has been set.");