const options = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    return options[Math.floor((Math.random() * options.length))]
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    
    playerSelection = prompt("Rock, Paper or Scissors ?").toLocaleLowerCase()
    computerSelection = getComputerChoice();
    
    // Draw
    if ((playerSelection === "rock") && (computerSelection === "rock")) {
        return console.log("Draw") + console.log(`Player: ${playerSelection} \nComputer: ${computerSelection}`);
    } else if ((playerSelection === "paper") && (computerSelection === "paper")) {
        return console.log("Draw") + console.log(`Player: ${playerSelection} \nComputer: ${computerSelection}`);
    } else if ((playerSelection === "scissors") && (computerSelection === "scissors")) {
        return console.log("Draw") + console.log(`Player: ${playerSelection} \nComputer: ${computerSelection}`);
    }

    // Player Win
    if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        return console.log("Player win: rock crushes scissors") + console.log(`Player: ${playerSelection} \nComputer: ${computerSelection}`) + playerScore++ + console.log(`Player Score: ${playerScore}`);
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        return console.log("Player win: scissors cuts paper") + console.log(`Player: ${playerSelection} \nComputer: ${computerSelection}`) + playerScore++ + console.log(`Player Score: ${playerScore}`);
    } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        return console.log("Player win: paper covers rock") + console.log(`Player: ${playerSelection} \nComputer: ${computerSelection}`) + playerScore++ + console.log(`Player Score: ${playerScore}`);
    }

    // Computer Win
    if ((playerSelection === "rock") && (computerSelection === "paper")) {
        return console.log("Computer win: paper covers rock") + console.log(`Player: ${playerSelection} \nComputer: ${computerSelection}`) + computerScore++ + console.log(`Computer Score: ${computerScore}`);
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        return console.log("Computer win: scissors cuts paper") + console.log(`Player: ${playerSelection} \nComputer: ${computerSelection}`) + computerScore++ + console.log(`Computer Score: ${computerScore}`);
    } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        return console.log("Computer win: rock crushes scissors") + console.log(`Player: ${playerSelection} \nComputer: ${computerSelection}`) + computerScore++ + console.log(`Computer Score: ${computerScore}`);
    }
}

playRound()
