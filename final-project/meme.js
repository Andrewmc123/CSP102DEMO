// Andrew McLean - Meme Page Script

// stores the movement timer //
let moveInterval;

// get the start button //
const startButton = document.getElementById("start-button");

// get the stop button //
const stopButton = document.getElementById("stop-button");

// get the meme image //
const memeImage = document.getElementById("memeImage");

// these hold the current position of the meme //
let xPosition = 0;
let yPosition = 130;

// this starts the meme movement //
function startMeme() {

   // disable start so it cant be clicked twice //
   startButton.disabled = true;

   // enable the stop button //
   stopButton.disabled = false;

   // start the timer that moves the meme //
   moveInterval = setInterval(moveMeme, 30);
}

// this stops the meme movement //
function stopMeme() {

   // enable the start button again //
   startButton.disabled = false;

   // disable the stop button //
   stopButton.disabled = true;

   // stop the timer //
   clearInterval(moveInterval);
}

// this moves the meme around the stage //
function moveMeme() {

   // move to the right a little //
   xPosition += 4;

   // if it goes off the right side, send it back to the left //
   if (xPosition > 480) {
      xPosition = 0;
   }

   // make an up and down wave motion //
   yPosition = 130 + Math.sin(xPosition / 25) * 60;

   // update the meme position //
   memeImage.style.left = xPosition + "px";
   memeImage.style.top = yPosition + "px";
}
