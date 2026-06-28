// Andrew McLean - Number Guessing Game Script

// these are the game variables //
let secretNumber;          // the number the player has to guess
let attempts;              // how many guesses the player made
let gamesPlayed = 0;       // total games played
let gameActive = false;    // is a game running right now

// this starts a brand new game //
function resetGame() {

   // pick a random number between 1 and 100 //
   secretNumber = Math.floor(Math.random() * 100) + 1;
   attempts = 0;
   gameActive = true;

   // show a starting message using innerHTML //
   document.getElementById("gameMessage").innerHTML = "New game started! Guess a number between 1 and 100.";
   document.getElementById("statsMessage").innerHTML = "";

   // clear the input box //
   document.getElementById("guessInput").value = "";
}

// get the form //
const guessForm = document.getElementById("guessForm");

// run this when the form is submitted //
guessForm.onsubmit = function(event) {

   // stop the page from refreshing //
   event.preventDefault();

   const messageDiv = document.getElementById("gameMessage");
   const statsDiv = document.getElementById("statsMessage");

   // if no game is running, ask them to start one //
   if (!gameActive) {
      messageDiv.innerHTML = "Please start a new game first!";
      return;
   }

   // get the players guess //
   let userGuess = parseInt(document.getElementById("guessInput").value);

   // count this attempt //
   attempts++;

   // check the guess against the secret number //
   if (userGuess === secretNumber) {

      messageDiv.innerHTML = "Congratulations! You guessed it in " + attempts + " attempts!";
      gamesPlayed++;
      gameActive = false;

      // show the stats using innerHTML //
      statsDiv.innerHTML = "Games Played: " + gamesPlayed + " | Last Score: " + attempts + " guesses";
   }
   else if (userGuess < secretNumber) {
      messageDiv.innerHTML = userGuess + " is too LOW. Try higher. (Attempt " + attempts + ")";
   }
   else {
      messageDiv.innerHTML = userGuess + " is too HIGH. Try lower. (Attempt " + attempts + ")";
   }

   // clear the box for the next guess //
   document.getElementById("guessInput").value = "";
};

// start a game when the page loads //
resetGame();
