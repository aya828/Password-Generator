// Assignment Code
var generateBtn = document.getElementById("generate");
var copyBtn = document.getElementById("copy");
var passwordInput = document.getElementById("display");
var submitBtn = document.getElementById("submit");
var lowerCaseBtn = document.getElementById("letter");
var upperCaseBtn = document.getElementById("capital");
var numberBtn = document.getElementById("number");
var characterBtn = document.getElementById("character");

var rangeslider = document.getElementById("slider"); 
var output = document.getElementById("demo"); 
output.innerHTML = rangeslider.value; 
  
rangeslider.oninput = function() { 
  output.innerHTML = this.value; 
} 

// Generate password button
generateBtn.onclick = function() {
  var passwordText = randomPassword();
  passwordInput.value = passwordText;
}

// Submit password button
submitBtn.onclick = function() {
  var passwordText = passwordInput.value;
  if(passwordText.length < 8) {
    alert("Password must have 8 characters or more.");
  }

// Password requirements: Upper case, Lower case, Number, Min 8 characters
  var foundUpperCase = false;
  var foundLowerCase = false;
  var foundNumber = false;

  for(var i = 0; i < passwordText.length; i++) {
    var letter = passwordText[i];
    var capitalLetter = letter.toUpperCase();
    var lowerCaseLetter = letter.toLowerCase();
    var number = parseInt(letter);
    
    if(letter == capitalLetter) {
      foundUpperCase = true;
    }
    if(letter == lowerCaseLetter) {
      foundLowerCase = true;
    }
    if(isNaN(number) == false) {
      foundNumber = true;
    }
  }
  if(foundUpperCase == false) {
    alert("Password must have uppper case letter.");
  }
  if(foundLowerCase == false) {
    alert("Password must have lower case letter.");
  }
  if(foundNumber == false) {
    alert("Password must contain a number.");
  }
  if(foundUpperCase && foundLowerCase && foundNumber) {
    alert("Password accepted!");
  } 
}

// Copy password to clipboard button
copyBtn.onclick = copyPassword;
function copyPassword() {
  document.getElementById("display").select();
  document.execCommand("copy");

  alert("Password copied to clipboard!");
}

// Generate random password function
var capitalCaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseValues = "abcdefghijklmnopqrstuvwxyz";
var numberValues = "1234567890";
var specialValues = "!@#$%^&*()";

function randomPassword() {
  var password = ""
  for(var i = 0; i < rangeslider.value; i++) {
    var index = parseInt(Math.random()*1000) % capitalCaseValues.length;
    if(upperCaseBtn.checked == true) {
      password = password + capitalCaseValues[index];
    }
    index = parseInt(Math.random()*1000) % lowerCaseValues.length;
    if(lowerCaseBtn.checked == true) {
      password = password + lowerCaseValues[index];
    }
    index = parseInt(Math.random()*1000) % numberValues.length;
    if(numberBtn.checked == true) {
      password = password + numberValues[index];
    }
    index = parseInt(Math.random()*1000) % specialValues.length;
    if(characterBtn.checked == true) {
      password = password + specialValues[index];
    }
  }
  return password.substring(0, parseInt(rangeslider.value));
}