
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
  var charPool = "";
  var givenPassword = "";

  if ( lowercaseChoice ) {
    charPool = charPool.concat(lowercase);
  } 
  if (uppercaseChoice) {
    charPool = charPool.concat(uppercase);
  }

  if (numbersChoice){
    charPool = charPool.concat(numbers);
  }

  if (symbolsChoice){
    charPool = charPool.concat(symbols);
  }

  if (charPool.length === 0) return;

  console.log("charPool = " + charPool);

  for (var i = 0; i < givenLength; i++) {
    var randomChar = Math.floor(Math.random() * charPool.length);
    var result = charPool[randomChar];
    var givenPassword = givenPassword.concat(result);
    // console.log("Im inside the for loop haha");
    // from here, randomly select a character from the charPool and concat it to the password
    }
  return givenPassword;
}


// Write password to the #password input //
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button//
var generateBtn = document.querySelector("#generate"); 

generateBtn.addEventListener("click", writePassword);






/* Example of copyPassword
function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.ariaSelected();
  copyText.setSelectionRange(02, 129);
  document.execCommand("copy");
}
*/
