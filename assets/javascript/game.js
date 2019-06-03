// Variables to keep track of score and guesses
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

// Variables to reference the html <p>
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesSoFarText = document.getElementById("guessesSoFar-text");

// Randomly select computer's letter
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


// Function when user presses key
document.onkeyup = function (event) {

    // Assign variable for key presses
    var userGuess = event.key;

    // Only allow game to work when pressing possible computer choices
    for (var i = 0; i < computerChoices.length; i++) {
    if (userGuess === computerChoices[i]) {

    // Logic for wins/losses, and resetting computer guess and and guessesLeft/guessesSoFar      
      if (userGuess === computerGuess) {
         wins++;
         function reset() {
            guessesSoFar.length = 0;
            guessesLeft = 9;
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];  
            }
            reset(); 
      } else if (userGuess !== computerGuess) {
        guessesLeft--;
        guessesSoFar.push(userGuess);
      } 

      if (guessesLeft === 0) {
         losses++;
         function reset() {
            guessesSoFar.length = 0;
            guessesLeft = 9;
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];  
            }
            reset();      
      }
      
      // Display the guesses left/so far, and wins/losses
      winsText.textContent = "Wins: " + wins;
      lossesText.textContent = "Losses: " + losses;
      guessesLeftText.textContent = "Number of guesses remaining: " + guessesLeft;
      guessesSoFarText.textContent = "Letters guessed so far: " + guessesSoFar;
      
    }
    }
  };

