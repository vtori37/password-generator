// Assignment code here
var password = document.getElementById("password");
  var chars= "0123456789";
  var passwordLength = 15;
  var password = "";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



/* Assignment code here
function 

// Get references to the #generate element //
var generateBtn = document.querySelector("#generate");

// Write password to the #password input //
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button//

generateBtn.addEventListener("click", writePassword);
*/
