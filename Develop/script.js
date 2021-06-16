// Assignment Code
function generatePassword() {
  var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var possiblePassword = [];

// Choosing a password length between 8-128 characters long and checking if the number chossen fall between said range.

  var numberOfCharacters = prompt('How many characters would you like your password to be? Please choose between 8-128 characters in length.');
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Please choose a number between 8 and 128.";
  } else {
    alert('Your password is ' + numberOfCharacters + ' characters long.');

  }

  var wantLowerCase = confirm('Would you like lowercase letters in your password? Press OK for yes, Cancel for no.');
  if (wantLowerCase === true) {
    alert('Your password will have lowercase letters.');
  } else {
    alert('Your password will NOT have lowercase letters.');
  }   
  
  var wantUpperCase = confirm('Would you like lowercase letters in your password? Press OK for yes, Cancel for no.');
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
  
  if (wantLowerCase === false && wantUpperCase === false && wantNumbers === false) {
    return'Please select at least one valid character type!!!';
  };

  
  if (wantLowerCase === true) {
    var possiblePassword = possiblePassword.concat(lowercase);
  }
  
  if (wantUpperCase === true) {
    var possiblePassword = possiblePassword.concat(uppercase);
  }
  
  if (wantNumbers === true) {
    var possiblePassword = possiblePassword.concat(numbers);
  }




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
