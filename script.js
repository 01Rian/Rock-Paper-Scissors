const imgUser = document.querySelector('#user');
const imgPc = document.querySelector('#pc');
const playing = document.querySelector('#playing');
const score = document.querySelector('#score');
const winner = document.querySelector('#winner');
const loser = document.querySelector('#loser');
const main = document.querySelector('#main');

let player1 = "";
let player2 = "";

let playerScore = 0;
let computerScore = 0;

playing.addEventListener('click', () => {
    reset();
    getComputerChoice();
});

function reset() {
    player1 = document.querySelector('input[name="play"]:checked').value;
    imgUser.innerHTML = "<img src='assets/images/" + player1 + ".png'>";
    imgPc.innerHTML = "";
} 

function getComputerChoice() {
    const option = ['rock', 'paper', 'scissor'];
    let options = option[Math.floor((Math.random() * option.length))];
    player2 = options;
    imgPc.innerHTML = "<img src='assets/images/" + player2 + ".png'>";
    playRound();
}

function playRound() {
    if (player1 === player2) {

    } else if (player1 === 'rock') {
        player2 === 'scissor' ? playerScore++ : computerScore++; 
    } else if (player1 === 'paper') {
        player2 === 'rock' ? playerScore++ : computerScore++;
    } else if (player1 === 'scissor') {
        player2 === 'paper' ? playerScore++ : computerScore++;
    }

    if (playerScore === 5 && computerScore < 5) {
        main.classList.add('none');
        winner.classList.remove('none');
        winner.classList.add('center');
    } else if (computerScore === 5 && playerScore < 5) {
        main.classList.add('none');
        loser.classList.remove('none');
        loser.classList.add('center');
    }

    score.innerHTML = playerScore + ":" + computerScore;
}

function newGame() {
    score.innerHTML = "0:0";
    playerScore = 0;
    computerScore = 0;
    reset();
    main.classList.remove('none');
    winner.classList.remove('center');
    winner.classList.add('none');
    loser.classList.remove('center');
    loser.classList.add('none');
}