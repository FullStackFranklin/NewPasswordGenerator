

// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
return Math.floor(Math.random()*(max - min) + min)
}

function getRandomItem(list) {
return list[randomInt(0, list.length)]
}

function generatePassword() {
 var EmployeeInput = prompt("Your password must be 8 to 128 characters")
 var passwordLength = parseInt(EmployeeInput)

if (isNaN(passwordLength)) {
  alert("Sorry, that is not a number")
  return
}
  if (passwordLength < 8 || passwordLength > 128) {
    alert ("Your password is restricted to 8 to 128 characters")
    return
  }

  var EmpChooseLowerCase = confirm ("Do you want to use lower case letters?")
  var EmpChooseNumbers = confirm ("Do you want to use numbers?")
  var EmpChooseUpperCase = confirm ("Do you want to use upper case letters?")
  var EmpChooseSpecialCharacters = confirm ("Do you want to use special characters?")

  var numberslist = ["0","1","2","3","4","5","6","7","8","9"]
  var symbolslist = ["!","@","#","$","%","&"]
  var lowercasealphabetslist = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppercasealphabetslist = ["A","B","C","D","E","F","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

  var criteriaMet = []


  if (EmpChooseLowerCase === true) {
    criteriaMet.push(lowercasealphabetslist)
  }
  if (EmpChooseNumbers === true) {
    criteriaMet.push(numberslist)
  }
  if (EmpChooseSpecialCharacters === true) {
    criteriaMet.push(symbolslist)
  }
  if (EmpChooseUpperCase === true) {
    criteriaMet.push(uppercasealphabetslist)
  }

  console.log(criteriaMet)
var generatePassword = ""

for (var i = 0; i < passwordLength; i++) {
 var randomInt = getRandomItem(criteriaMet)
 var randomChar = getRandomItem(randomInt)
 console.log(randomChar)

 generatePassword += randomChar
}
return generatePassword 
} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
//need a generate password function
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
