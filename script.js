function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors']
    return console.log(options[Math.floor((Math.random() * options.length))])
}

getComputerChoice()

