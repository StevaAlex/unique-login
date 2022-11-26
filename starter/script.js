// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
var passwordLength; // declare this variable outside so it can be used globally 
// however if you declare var length = prompt("Please....") outside the function, you will only be prompted once if the conditions
//in the do-while loop are not met
function getPasswordOptions() {
  do {
   passwordLength = prompt("Please choose a password length between 10 and 64");
  }
  while (passwordLength < 10 || passwordLength > 64 || isNaN(passwordLength));
}

getPasswordOptions(); 

// Function for getting a random element from an array
function getRandom(arr) {  //make sure to put a name for the array that you will be passing in the brackets
  return arr[Math.floor(Math.random() * arr.length)];
} // the above allows you to genrate a random number that is the array.length
// this gives you the array[index] element
 
// console.log("my random number" + getRandom(numericCharacters));
// // Function to generate password with user input 


var passwordFinal= ''; //put this '' to make it a string so when concatenating it doesn't add numbers- This is the final password
var specialCharSelected = confirm ("Would you like special characters in your password?"); //confirm produces a boolean result
var numericCharSelected = confirm("Would you like numbers in your password?"); 
var upperCaseSelected = confirm("Would you like upper case characters in your password?"); 
var lowerCaseSelected = confirm("Would you like lower case characters in your password?"); 
var counter = 0;//add this var that allows you to track the type of characters that == true 
// that way you can calculate how many times the loop in generate2ndPassword runs for
//so if someone chose 'ok' or true for 3 choices, then counter=3 and if they chose a length of 10, the loop runs 7 times

var preferredCharacters = []; //create this empty array variable to combine/concat the characters variables
//when the the charsacter variable == true, the preffered variable gets concatenated with that variable 
//this creates a variable with only the chracters that the user wants in their password

function generatePassword() {  

  if (specialCharSelected == true) { 
   passwordFinal += getRandom(specialCharacters);//if ==true generate random array selection and concat to 
   counter++; 
    preferredCharacters= preferredCharacters.concat(specialCharacters);
  } 
  if ( numericCharSelected == true) { 
    passwordFinal += getRandom(numericCharacters);
    counter++;
    preferredCharacters= preferredCharacters.concat(numericCharacters);
  }
  if ( upperCaseSelected== true) { 
    passwordFinal += getRandom(upperCasedCharacters);
    counter++; 
    preferredCharacters= preferredCharacters.concat(upperCasedCharacters);
  } 
  if ( lowerCaseSelected== true) { 
    passwordFinal += getRandom(lowerCasedCharacters);
    counter++; 
    preferredCharacters= preferredCharacters.concat(lowerCasedCharacters);
}
}   

generatePassword(); //call the first function before calling the other function as values 1st function affect the 2nd



function generateOverallPassword() { 
  for (var i = 0; i < passwordLength - counter ; i++ ) { //so this subtracts the number of true statements from the obverall password length
   passwordFinal+=  getRandom(preferredCharacters); //after each loop, a random chracter is selected and stored in a variable
  }
} 



generateOverallPassword(); 
console.log("overall password: " + passwordFinal); //works! 
//find a way to randomise passwordFinal, make it hack proof!! 
//it currently does character, number, upper case and lower case in that order everytime so it needs to be randomised


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = passwordFinal;
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);