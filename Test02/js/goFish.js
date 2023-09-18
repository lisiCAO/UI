/* TEST 2 - LISI CAO 2387145 */

//----- DO NO TOUCH BELOW ----//
// You are encouraged to use these variables but should not modify them
const minNumber = 1; // Minimum value for the random number
const maxNumber = 100; // Maximim value for the random number
const maxTries = 5; // Maximum number of tries to guess the number
var randomNumber; // Randomly generated number
var countTries; // Counter to track number of tries
let guessesArr = [];

window.addEventListener("load", setupGoFish); //onload event listener
//----- DO NOT TOUCH ABOVE ----//

/**
 * Setup page when the document is done loading
 */
function setupGoFish() {
  // Declare and initialize UI elements
  let formBait = document.getElementById("bait");
  let inputNum = document.createElement("input");
  let btnBait = document.createElement("input");
  let btnGo = document.createElement("input");
  let message = document.createElement("p");
  let guessesElement = document.getElementById("guesses");
  let guessResult = document.createElement("li");
  let resultsElement = document.getElementById("results");

  /* Configure UI elements */
  // Guesses
  guessResult.id = "guess";
  guessResult.style.display = "none";

  // Message
  message.id = "result";

  // Number input
  inputNum.id = "txtNumber";

  // Button Guess
  btnBait.id = "btnGuess";
  btnBait.type = "button";
  btnBait.value = "Bait The Hook";

  // Button Retry
  btnGo.id = "btnRetry";
  btnGo.type = "button";
  btnGo.value = "Let's Go Fishing";
  btnGo.style.display = "none";

  // Append elements
  guessesElement.appendChild(guessResult);
  resultsElement.appendChild(message);
  formBait.appendChild(inputNum);
  formBait.appendChild(btnBait);
  formBait.appendChild(btnGo);

  // Add event listeners
  btnBait.addEventListener("click", fishOnHook);
  btnGo.addEventListener("click", castNewLine);

  // Start a new game round
  castNewLine();
}

/**
 * Initialize a new round
 */
function castNewLine() {
  // Declare UI elements
  let resultsElement = document.getElementById("results");
  let guessesElement = document.getElementById("guesses");
  let oldResult = document.getElementById("result");
  let oldGuesses = document.getElementById("guess");
  let numberInput = document.getElementById("txtNumber");
  let btnBait = document.getElementById("btnGuess");
  let btnGo = document.getElementById("btnRetry");
  let message = document.createElement("p");
  let guessResult = document.createElement("li");

  // Remove old content in results
  oldResult.remove();
  oldGuesses.remove();
  guessesArr = [];

  // Message
  message.id = "result";
  resultsElement.appendChild(message);

  // Guesses
  guessResult.id = "guess";
  guessesElement.appendChild(guessResult);

  // Input Number
  numberInput.value = "";
  numberInput.disabled = false;

  // Buttons
  btnBait.disabled = false;
  btnGo.style.display = "none";

  // Generate a new random number for the player to guess
  randomNumber = Math.floor(Math.random() * maxNumber) + minNumber;

  // Reset the tries counter
  countTries = 0;
}

/**
 * Checks if the guessed number is the same as the random number.
 */
function fishOnHook() {
  let numberInput = document.getElementById("txtNumber");
  let message = document.getElementById("result");
  let btnBait = document.getElementById("btnGuess");
  let btnGo = document.getElementById("btnRetry");
  let guessResult = document.getElementById("guess");

  guessResult.style.display = "block";

  // Validate the input value
  if (!numberInput.value) {
    alert("Please enter a number.");
    return;
  }

  if (isNaN(numberInput.value)) {
    alert("Please enter a valid number.");
    numberInput.value = "";
    return;
  }

  if (numberInput.value < 1 || numberInput.value > 100) {
    alert("Please enter a number between 1 and 100.");
    numberInput.value = "";
    return;
  }

  // Push guess number to guesses array
  let guessNumber = parseInt(numberInput.value);
  guessesArr.push(guessNumber);

  // Count Tries
  countTries += 1;

  // Compare the player's guess with the random number
  if (randomNumber > guessNumber) {
    numberInput.value = "";
    message.textContent = "Too Shallow";

    guessResult.textContent = guessesArr.join(", ");
  } else if (randomNumber < guessNumber) {
    numberInput.value = "";
    message.textContent = "Too Deep";

    guessResult.textContent = guessesArr.join(", ");
  } else {
    // Buttons
    btnBait.disabled = true;
    btnGo.style.display = "";
    // Input Number
    numberInput.value = "";
    numberInput.disabled = true;
    // Message Content
    message.textContent =
      "You caught the big one!! It took you " + countTries + " tries.";
    return;
  }

  // Check if player has used up all tries
  if (countTries >= maxTries) {
    message.textContent = "No more fish in the sea.";

    btnBait.disabled = true;
    btnGo.style.display = "";

    numberInput.value = "";
    numberInput.disabled = true;
  }
}
