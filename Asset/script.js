// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

// list array of all applicable characters for password generation
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbol = ['!', '@', '#', '^', '(', ')', '$', '%'];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passwordChoice = [];

    // start password lenght selector
    var characterChoice = window.prompt("How many characters do you want your password to be? (8-128 characters)");
       if (isNaN(characterChoice) || characterChoice < 8 || characterChoice > 128) {
        window.alert("Password length must be between 8-128 characters.");
        return generatePassword();
    }

    // variables for user imput
    var confirmLowercase = window.confirm("Would you like lowercase letters in your password?");
    var confirmUppercase = window.confirm("Would you like uppercase letters in your password?");
    var confirmSymbols = window.confirm("Would you like special characters in your password?");
    var confirmNumbers = window.confirm("Would you like numbers in your password?"); 

    if (confirmLowercase) {
        passwordChoice = passwordChoice.concat(lower);
    }
    if (confirmUppercase) {
        passwordChoice = passwordChoice.concat(upper);
    }
    if (confirmSymbols) {
        passwordChoice = passwordChoice.concat(symbol);
    }
    if (confirmNumbers) {
        passwordChoice = passwordChoice.concat(number);
    }
    console.log(passwordChoice);

    // generate password
    var passwordGen = "";
        for (var i = 0; i < characterChoice; i++) {
        var genRandom = Math.floor(Math.random() * passwordChoice.length);
        passwordGen = passwordGen + passwordChoice[genRandom];
        }
 
    return passwordGen;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);