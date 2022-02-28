
var password = document.getElementById("password");
// var generateBtn = document.getElementById("generate");

// Character Types
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()}{][?.,~`<>+=-";

// Criteria Prompts
/* var lowercaseChoice = confirm("Do you want to include lower case letters?");
var uppercaseChoice = confirm("Do you want to include upper case letters?")
var numbersChoice = confirm("Do you want to include numbers?")
var symbolsChoice = confirm("Do you want to include symbols?") */

// Prompts for character type criteria


  
function generatePassword() {
    var charPool = "";
    var givenPassword = "";
    
    var givenLength = window.prompt("Please enter your desired password length between 8 and 128.", 8);
    if (givenLength < 8 || givenLength > 128 ) {
      window.alert("Please provide a number between 8 to 128.");
      generatePassword();
      return;
    } 

    var lowercaseChoice = confirm("Do you want to include lower case letters?");
    if ( lowercaseChoice ) {
      charPool = charPool.concat(lowercase);
    } 

    var uppercaseChoice = confirm("Do you want to include upper case letters?");
    if (uppercaseChoice) {
      charPool = charPool.concat(uppercase);
    }

    var numbersChoice = confirm("Do you want to include numbers?");
    if (numbersChoice){
      charPool = charPool.concat(numbers);
    }

    var symbolsChoice = confirm("Do you want to include symbols?");
    if (symbolsChoice){
      charPool = charPool.concat(symbols);
    }

   if (charPool.length === 0) 
    return;

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






