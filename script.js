// Assignment Code

// Function with variables for posssible characters.
function generatePassword() {
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var special = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];


  var possiblePassword = [];

  alert('Password must contain at least one of the following types of characters: Numbers, lowercase letters, uppercase letters or special characters.');

// Choosing a password length between 8-128 characters long. Checking if the number chossen fall between said range.

  var numberOfCharacters = prompt('How many characters would you like your password to be? Please choose between 8-128 characters in length.');
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Please choose a number between 8 and 128.";
  } else {
    alert('Your password is ' + numberOfCharacters + ' characters long.');

  }

// Checking if the user wants each character type in their password.

  var wantLowerCase = confirm('Would you like lowercase letters in your password? Press OK for yes, Cancel for no.');
  if (wantLowerCase === true) {
    alert('Your password will have lowercase letters.');
  } else {
    alert('Your password will NOT have lowercase letters.');
  }   
  
  var wantUpperCase = confirm('Would you like uppercase letters in your password? Press OK for yes, Cancel for no.');
  if (wantUpperCase === true) {
    alert('Your password will have uppercase letters.');
  } else {
    alert('Your password will NOT have uppercase letters.');
  }   
  
  var wantNumbers = confirm('Would you like numbers in your password? Press OK for yes, Cancel for no.');
  if (wantNumbers === true) {
    alert('Your password will have numbers.');
  } else {
    alert('Your password will NOT have numbers.');
  }
  
  var wantSpecialCharacters = confirm('Would you like special characters in your password? Press OK for yes, Cancel for no.');
  if (wantSpecialCharacters === true) {
    alert('Your password will have special characters.');
  } else {
    alert('Your password will NOT have special characters.');
  }

// If users don't select at least one character type, return a error message.

  if (wantLowerCase === false && wantUpperCase === false && wantNumbers === false && wantSpecialCharacters === false) {
    return'Please select at least one valid character type!!!';
  };

  // If users select a certain character type it gets added to the empty array in the variable 'possiblePassword'.

  if (wantLowerCase === true) {
    var possiblePassword = possiblePassword.concat(lowercase);
  }
  
  if (wantUpperCase === true) {
    var possiblePassword = possiblePassword.concat(uppercase);
  }
  
  if (wantNumbers === true) {
    var possiblePassword = possiblePassword.concat(numbers);
  }
  
  if (wantSpecialCharacters === true) {
    var possiblePassword = possiblePassword.concat(special);
  }
// Using a for loop to generate a random password with the Math.floor and Math.random methods which

  let finalPassword = ""
  for (let i = 0; i < numberOfCharacters; i++) {
    let randomNumberGenerator = [Math.floor(Math.random() * possiblePassword.length)];

    finalPassword = finalPassword + possiblePassword[randomNumberGenerator];
  }

  // Returns the final password to the screen.
  return finalPassword;

};



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
