
function getComputerChoice() {
    const cpu_answers = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * cpu_answers.length);
    return cpu_answers[index];
}

let cpuScore =0;
let yourScore = 0;

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();

    // Select the HTML elements where the choices and result will be displayed
    const playerChoiceDiv = document.getElementById("player-choice");
    const computerChoiceDiv = document.getElementById("computer-choice");
    const gameResultDiv = document.getElementById("game-result");
    const cpuTrack = document.getElementById("cScore");
    const plTrack = document.getElementById("pScore");

    // Update the content of these elements
    playerChoiceDiv.textContent = `Player's choice: ${playerChoice}`;
    computerChoiceDiv.textContent = `Computer's choice: ${computerChoice}`;

    let result;
    if (playerChoice === computerChoice) {
        result = "Deary me it's a draw";
    } else if ( 
        (playerChoice === "paper" && computerChoice === "rock") || 
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        yourScore++;
        result = "You win!";
    } else {
        cpuScore++;
        result = "You lose :(";
    }

    // Update the result element
    gameResultDiv.textContent = result;
    cpuTrack.textContent = `player score: ${yourScore}`;
    plTrack.textContent = `Computer's score: ${cpuScore}`;
}




// Select all buttons and add the event listener to each one
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.id);
        if(yourScore === 5){
            alert("you win the game");
        }
        else if(cpuScore === 5){
            alert("you lose womp womp");
    
        }
    });
});





/*
function getComputerChoice(){
    let cpu_answers = ["rock", "paper", "scissors"];
    var index = Math.floor(Math.random() * cpu_answers.length);
    return cpu_answers[index];
}
/*
function getPlayerChoice(){
    var p_ans = prompt("rock, paper, or scissors?");
    return p_ans;
}
    

let cpuScore=0;
let yourScore = 0;

function playRound() {
    //let playerChoice = getPlayerChoice();
    //let computerChoice = getComputerChoice();

    const playerChoiceDiv = document.getElementById("player-choice");
    const computerChoiceDiv = document.getElementById('computer-choice');
    const gameResultDiv = document.getElementById("game-result");

    playerChoiceDiv.textContent=`Player's choice: ${playerChoice}`;
    computerChoiceDiv.textContent = `Computer's choice: ${computerChoice}`;

    if(playerChoice == computerChoice){
        return "Deary me it's a draw";
    }

    if(playerChoice == "paper" && computerChoice == "rock"|| 
        playerChoice == "rock"  && computerChoice == "scissors" ||
        playerChoice == "scissors" && computerChoice == "paper" ){
            
            yourScore++; 
        return "You win!"
    }
    else{
        cpuScore++;
        return "you lose :(";
        
    }
    gameResultDiv.textContent = result;
}
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", playRound);
});


*/

        
  // your code here!
/*

function game(){
    /*
for(let i=0;i<=5;i++){
    
    playRound();
    
    console.log("Computer has "+cpuScore +" points");
    console.log("you have "+yourScore+" points");

}
*/



//game();
