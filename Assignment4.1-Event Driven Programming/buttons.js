// stores interval // 
let moveInterval; 

//here we are accessing the start buttton //
const startButton = document.getElementById("start-button"); 

// here we are accessing the stop button //
const stopButton = document.getElementById("stop-button");

// here we are accessing the image // 
 const memeImage = document.getElementById("memeImage"); 

 
 
 //  this starts the movement of the meme // 
 function startMeme(){
    // disables the start button to prevent mutiple clicks //
    startButton.disabled = true; 

 // this enables the stop button // 
   stopButton.disabled = false; 

// movement timer starts // 
moveInterval = setInterval(moveMeme, 30); 

 }


 // this function stops the meme movement //
 function stopMeme(){

    // this code enables the start button // 
    startButton.disabled = false; 

    // this disables the stop button 
    stopButton.disabled = true;

    // stops the movement timer // 
    clearInterval(moveInterval); 
 }
 
// these variables store the current position of the meme //
  let xPosition = 0;
   let yPosition = 250;

// this is the function to move the meme around // 
function moveMeme(){

   // this is increaasing the horizontal position // 
   xPosition += 5; 

   // this is creating the up and down motion of the meme // 
   yPosition = 250 + Math.sin(xPosition / 25) * 50; 

   // this updates the meme's top position // 
   memeImage.style.top = yPosition + "px"; 
   memeImage.style.left = xPosition + "px"; 
}


// Tracking Player stats with this class // 

class Gamestats {
   // Constructor initalizes the stats object // 
   constructor(){
      this.totalAttempts = 0;        // total guesses made
      this.gamesPlayed = 0;        // games played
      this.totalGuesses = 0;    // sum of all guesses
      this.bestScore = Infinity;  // best score 

   }

   // This is to update stats after each game // 

   updateStats(attempts){
      this.gamesPlayed++; 
      this.totalAttempts += attempts; 
      this.totalGuesses += attempts; 

      // Track best score using decision logic 
 
      if (attempts < this.bestScore) {
         this.bestScore = attempts; 
      }
   }


   // Method to get Avaerge guesses per game // 

  getAverage() {
        // Decision logic to avoid division by zero
        if (this.gamesPlayed === 0) {
            return 0;
        }
        return (this.totalGuesses / this.gamesPlayed);
      }
    
    // Method to reset stats
    resetStats() {
        this.totalAttempts = 0;
        this.gamesPlayed = 0;
        this.totalGuesses = 0;
        this.bestScore = Infinity;
    }
   }
   

    // Game State Variables // 

const stats = new Gamestats(); 
  
let secretNumber;    // The Numebr to Guess 
let attempts;    // Number of attempts in current game
let gameActive = false;  // checks if game is active currently 

   // Function to start a new game
function resetGame() {
    // Generate random number between 1 and 100
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameActive = true;
    
    // Get result containers
    const messageDiv = document.getElementById("gameMessage");
    const statsDiv = document.getElementById("statsMessage");
    
    // Using innerHTML for game messages (no alerts)
    messageDiv.innerHTML = "New game started! Guess a number between 1 and 100";
    statsDiv.innerHTML = "";
    
    // Clear input field
    document.getElementById("guessInput").value = "";
}
// Function to handle the guess submission
function handleGuess(event) {
    // Prevent page refresh on form submission
    event.preventDefault();
    
    // Get input and result containers
    const inputField = document.getElementById("guessInput");
    const messageDiv = document.getElementById("gameMessage");
    const statsDiv = document.getElementById("statsMessage");
    
    
    if (!gameActive) {
        // Using innerHTML for validation message (no alerts)
        messageDiv.innerHTML = "⚠️ Please start a new game first!";
        return;
    }
    
    // Get the user's guess
    const userGuess = parseInt(inputField.value);
    
 
    if (isNaN(userGuess)) {
        // Using innerHTML for validation (no alerts)
        messageDiv.innerHTML = "⚠️ Please enter a valid number!";
        return;
    }
    

    if (userGuess < 1 || userGuess > 100) {
        // Using innerHTML for validation (no alerts)
        messageDiv.innerHTML = "⚠️ Please enter a number between 1 and 100!";
        return;
    }
    
    // Increment attempts counter
    attempts++;
    
    
    // Compare guess with secret number
    if (userGuess === secretNumber) {
        // Player guessed correctly!
        messageDiv.innerHTML = `🎉 Congratulations! You guessed it in ${attempts} attempts! 🎉`;
        
        // Update statistics using the class method
        stats.updateStats(attempts);
        
        // Display stats using innerHTML
        displayStats(statsDiv);
        
        // End the current game
        gameActive = false;
        
    } else if (userGuess < secretNumber) {
        // Guess is too low
        messageDiv.innerHTML = `📈 ${userGuess} is too LOW. Try a higher number! (Attempt ${attempts})`;
    } else {
        // Guess is too high
        messageDiv.innerHTML = `📉 ${userGuess} is too HIGH. Try a lower number! (Attempt ${attempts})`;
    }
    
    // Clear input for better UX
    inputField.value = "";
}


// Function to display statistics
function displayStats(statsDiv) {
    // Get stats from the stats object
    const gamesPlayed = stats.gamesPlayed;
    const totalAttempts = stats.totalAttempts;
    const average = stats.getAverage();
    const bestScore = stats.bestScore === Infinity ? "N/A" : stats.bestScore;
    
    // Using innerHTML to display stats
    statsDiv.innerHTML = `
        📊 Statistics:<br>
        🎮 Games Played: ${gamesPlayed}<br>
        🎯 Total Attempts: ${totalAttempts}<br>
        📈 Average Guesses: ${average.toFixed(1)}<br>
        🏆 Best Score: ${bestScore}
    `;
}

// Initialize game on page load
window.onload = function() {
    // Start a new game when page loads
    resetGame();
};


 
