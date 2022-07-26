const options = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    return console.log(options[Math.floor((Math.random() * options.length))])
}

getComputerChoice()

