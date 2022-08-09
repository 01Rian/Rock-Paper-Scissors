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
    reset()
    getComputerChoice()
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
    playRound()
}