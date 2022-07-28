const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return options[Math.floor((Math.random() * options.length))];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    
    playerSelection = prompt("Rock, Paper or Scissors ?").toLocaleLowerCase();
    computerSelection = getComputerChoice();
    
    // Draw
    if (((playerSelection === "rock") && (computerSelection === "rock")) || ((playerSelection === "paper") && (computerSelection === "paper")) || ((playerSelection === "scissors") && (computerSelection === "scissors"))) {
        return console.log(`Draw \nPlayer: ${playerSelection} \nComputer: ${computerSelection}`);
    }

    // Player Win
    if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        return console.log(`Player win: rock crushes scissors \nPlayer: ${playerSelection} \nComputer: ${computerSelection}`) + playerScore++ + console.log(`Player Score: ${playerScore}`);
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        return console.log(`Player win: scissors cuts paper \nPlayer: ${playerSelection} \nComputer: ${computerSelection}`) + playerScore++ + console.log(`Player Score: ${playerScore}`);
    } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        return console.log(`Player win: paper covers rock \nPlayer: ${playerSelection} \nComputer: ${computerSelection}`) + playerScore++ + console.log(`Player Score: ${playerScore}`);
    }

    // Computer Win
    if ((playerSelection === "rock") && (computerSelection === "paper")) {
        return console.log(`Computer win: paper covers rock \nPlayer: ${playerSelection} \nComputer: ${computerSelection}`) + computerScore++ + console.log(`Computer Score: ${computerScore}`);
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        return console.log(`Computer win: scissors cuts paper \nPlayer: ${playerSelection} \nComputer: ${computerSelection}`) + computerScore++ + console.log(`Computer Score: ${computerScore}`);
    } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        return console.log(`Computer win: rock crushes scissors \nPlayer: ${playerSelection} \nComputer: ${computerSelection}`) + computerScore++ + console.log(`Computer Score: ${computerScore}`);
    }
}

function game() {
    
    for (let i = 0; i <= 5; i++) {
        playRound();
    }
    
    if (playerScore > computerScore) {
        alert("Player Win");
    } else if (computerScore > playerScore) {
        alert("Computer Win");
    } else {
        alert("Draw");
    }
}

game();