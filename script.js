const imgUser = document.querySelector('#user');
const imgPc = document.querySelector('#pc');
const playing = document.querySelector('#playing');
const score = document.querySelector('#score');
const winner = document.querySelector('#winner');
const loser = document.querySelector('#loser');
const main = document.querySelector('#main');

function getComputerChoice() {
    const option = ['rock', 'paper', 'scissor'];
    let options = option[Math.floor((Math.random() * option.length))];
    player2 = options;
    imgPc.innerHTML = "<img src='assets/images/" + player2 + ".png'>";
    playRound()
}