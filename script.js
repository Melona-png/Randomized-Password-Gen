// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables for password randomization

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(",];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
 "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
 "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var choices = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//  promopts the user to enter a character length before giving further options
function generatePassword() {
    var password = "";
    var passwordLength =
    window.prompt("Choose character length between 8 - 128")
//  if the user enters a character length outside of those options they are prompted to try again
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Please enter a character amount between 8 - 128")
      return "This is wrong and you should feel bad";
    }
// if user does not enter numbers they are prompted to put in numbers
    if (isNaN(passwordLength)) {
      window.alert("Please input numerical value!!");
      }
// user is prompted to choose options for generation
    else {
     var special = window.confirm("Would you like to include special characters?")
     var capital = window.confirm("Would you like to include capital letters?")
     var lower = window.confirm("Would you like to include lowercase letters?")
     var num = window.confirm("Would you like to include numbers?")
    }

    if (special === true) {
        choices = choices.concat(specialChar);
    }

    if (capital === true) {
        choices = choices.concat(upperCase);
    }

    if (lower === true) {
        choices = choices.concat(lowerCase);
    }

    if (num === true) {
        choices = choices.concat(numbers);
    }

//  if user does not select any, they are told to please choice. uwu 
   else if (special === false && capital === false && lower === false && num === false) {
    window.alert("Please choice uwu")
   }

// for loop for randomizing arrays
   for (var i = 0 ; i < choices.length ; i++) {
    var passRandom = [Math.floor(Math.random() * choices.length)];
    password = password.concat (choices[passRandom]);
}
return password; 
} 



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);