
var password = document.getElementById("password");
// var generateBtn = document.getElementById("generate");
// Character Types
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()}{][?.,~`<>+=-";

// Prompts for character type criteria
var givenLength = prompt("Please enter your desired password length between 8 and 128.", 8);
var lowercaseChoice = confirm("Do you want to include lower case letters?");
var uppercaseChoice = confirm("Do you want to include upper case letters?")
var numbersChoice = confirm("Do you want to include numbers?")
var symbolsChoice = confirm("Do you want to include symbols?")

/* With the provided criteria chosen at the top, this function 
generates the password and returns it */
function generatePassword() {
  var password = "";
  var pool = "";

  if ( lowercaseChoice ) {
    pool += lowercase;
  } 
  if (uppercaseChoice) {
    pool += uppercase;
  }

  if (numbersChoice){
    pool += numbers;
  }

  if (symbolsChoice){
    pool += symbols;
  }
console.log();
  for (var i = 0; i < givenLength; i++) {
    var pool = Math.floor(Math.random() * givenLength + 1)
    // console.log("Im inside the for loop haha");
    // from here, randomly select a character from the pool and concat it to the password
    }
  return password;

}

// Write password to the #password input //
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button//
generateBtn.addEventListener("click", writePassword);






/* Example of copyPassword
function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.ariaSelected();
  copyText.setSelectionRange(02, 129);
  document.execCommand("copy");
}
*/
