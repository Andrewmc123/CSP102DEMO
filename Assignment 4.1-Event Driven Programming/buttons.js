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


 
