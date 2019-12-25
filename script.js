// // Assignment Code
// var generateBtn = document.querySelector("#generate");


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

//   copyBtn.removeAttribute("disabled");
//   copyBtn.focus();
// }

// function copyToClipboard() {
//   // BONUS 
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // BONUS EVENT LISTENER

// Generate random password
function generate() {
  // Set password length/complaxity
  let complexity = document.getElementById("slider").value;

  // Possible password values
  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

  let password = "";

  // Create for loop to choose password characters
  for (var i = 0; i <= complexity; i++) {
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  // Add password to textarea
  document.getElementById("display").value = password;

  // Add password to previously generated password
  document.getElementById("lastPassword").innerHTML += password + "<br>";
}

// Set default length by 25
document.getElementById("length").innerHTML = "Length: 25";

document.getElementById("slider").oninput = function () {
  if (document.getElementById("slider").value > 0) {
    document.getElementById("length").innerHTML = "Length" + document.getElementById("slider").value;
  }
  else {
    document.getElementById("length").innerHTML = "Length: 1";
  }
}

// Function to copy password to clipboard
function copyPassword() {
  document.getElementById("display").select();
  document.execCommand("copy");

  alert("Password copied to clipboard!");
}

var myInput = document.getElementById("display");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;

    if (myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } 
    else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;

    if (myInput.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } 
    else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }

  // Validate numbers
  var numbers = /[0-9]/g;

    if (myInput.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } 
    else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }

  // Validate length
    if (myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } 
    else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
}