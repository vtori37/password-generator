
var password = document.getElementById("password");

// Character Types
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()}{][?.,~`<>+=-";

// Criteria Prompts
function generatePassword() {
    var charPool = "";
    var givenPassword = "";
    
    var givenLength = window.prompt("Please enter your desired password length between 8 and 128.", 8);
    if (givenLength < 8 || givenLength > 128 || (isNaN(givenLength))) {
      window.alert("Please provide a number between 8 to 128.");
      return generatePassword();
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

    var symbolsChoice = confirm("Do you want to include special characters?");
    if (symbolsChoice){
      charPool = charPool.concat(symbols);
    }

   if (charPool.length === 0) 
    return;

    console.log("charPool = " + charPool);

    // Used to randomize characters
    for (var i = 0; i < givenLength; i++) {
      var randomChar = Math.floor(Math.random() * charPool.length);
      var result = charPool[randomChar];
      var givenPassword = givenPassword.concat(result);
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






