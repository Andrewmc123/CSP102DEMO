// waits for form to submtit // 

document.getElementById("gameForm").onsubmit = function(event){

    // stops page from refreshing automatically //
    event.preventDefault(); 

    // This gets the username input value // 

    let playerName = document.getElementById("username").value; 

    // calls the welcome function // 

    welcomePlayer(playerName); 
    
    // This will call the game function // 

    playGame(); 

};


// This will welcome the player // 

function welcomePlayer(name){

    // This will change the welcome message // 

    document.getElementById("welcomeMessage").innerHTML = "Welcome " + name + "... Let's play the game."; 

}





// this is the function that will run the dice game // 

function playGame(){
     
    // generates a randomnumber 1-6 // 

    let die1 = Math.floor(Math.random() * 6 ) + 1; 

    // this will alos generate a randome number from 1-6 like the function above // 

    let die2 = Math.floor(Math.random() * 6 ) + 1; 

    // adds both dice togather // 


let sum = die1 + die2;

    // This stores the results // 

    let result = ""; 


    // checks losses // 

if(sum === 7 || sum === 11){
    
    result = "CRAPS - JuDMENT DAY! You lose!";
    }

// this checks if both the dice are even // 

else if(die1 === die2 && die1 % 2 === 0){
    result = "DOUBLES - Your soul is saved! You win!";

}
else{
    result = "You Coward ! You Pushed"; 
}

// this will display the results //
document.getElementById("gameResults").innerHTML = 

"<h2> Game Resuklts</h2>" + 
"<p> Die 1: " + die1 + "</p>" + 
"<p> Die 2: " + die2 + "</p>" +
"<p>Total: " + sum + "</P>" + 
"<h3>" + result + "</h3> "; 

} 
