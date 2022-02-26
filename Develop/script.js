// Assignment code here
var password = document.getElementById("password");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()";

// var passwordLength = function promptPasswordLength() {
//   return givenLength;
// }

var givenLength = prompt("Please enter your desired password length between 8 and 128.", 8);

var lowercaseChoice = confirm("Do you want to use lower case?");

function generatePassword() {
  var password = "";
  var pool = "";
  if ( lowercaseChoice ) {
    pool += lowercase
  } 

  for (var i = 0; i < givenLength; i++) {
    console.log("Im inside the for loop haha");
    // from here, randomly select a character from the pool and concat it to the password
    }
  return password;
}


// document.getElementById("password").value = password;


// // Get references to the #generate element
// var x = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   // var password = generatePassword();
//   // var passwordText = document.querySelector("#password");
//   console.log(x);
//   // passwordText.value = password;

// }

// // Add event listener to generate button
// x.addEventListener("click", writePassword);



// //Assignment code here
// function 

// Get references to the #generate element //
var generateBtn = document.querySelector("#generate");

// function generatePassword() {
//   var x = "Password1.0";
//   return x;
// }

// Write password to the #password input //
function writePassword() {
  
  var password = generatePassword();
  var x = document.querySelector("#password");

  x.value = password;

}

// Add event listener to generate button//

generateBtn.addEventListener("click", writePassword);

