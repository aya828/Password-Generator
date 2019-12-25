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
  for(var i = 0; i <= complexity; i++) {
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  // Add password to textarea
  document.getElementById("display").value = password;

  // Add password to previously generated password
  document.getElementById("lastPassword").innerHTML += password + "<br>";
}

// Set default length by 25
document.getElementById("length").innerHTML = "Length: 25";

document.getElementById("slider").oninput = function() {
  if(document.getElementById("slider").value > 0) {
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