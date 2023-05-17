// Get the input field
var input = document.getElementById("input");

// Clear the input field
function clearInput() {
 input.value = "";
}

// Delete the last character in the input field
function backspace() {
 input.value = input.value.slice(0, -1);
}

// Insert a character into the input field
function insert(character) {
 input.value += character;
}

// Calculate the result of the expression in the input field
function calculate() {
 try {
  input.value = eval(input.value);
 } catch (error) {
  input.value = "Error";
 }
}

// Replace pi with its value in the input field
function replacePi() {
 input.value = input.value.replace(/pi/g, Math.PI);
}

// Replace exp with its value in the input field
function replaceExp() {
 input.value = input.value.replace(/exp\((.*)\)/g, Math.exp("$1"));
}

// Replace sqrt with its value in the input field
function replaceSqrt() {
 input.value = input.value.replace(/sqrt\((.*)\)/g, Math.sqrt("$1"));
}

// Evaluate the expression in the input field when the user presses enter
input.addEventListener("keyup", function(event) {
 if (event.key === "Enter") {
  calculate();
 }
});

// Replace pi, exp, and sqrt with their values when the user clicks calculate
function handleClick() {
 replacePi();
 replaceExp();
 replaceSqrt();
 calculate();
}

// Evaluate the expression in the input field when the user clicks the equals button
document.querySelector(".calculator .buttons .operator:last-of-type").addEventListener("click", handleClick);
