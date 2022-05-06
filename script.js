//Globals
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let rounds = 0

//ROCK PAPER SCISSOR GAME
/*Data definitions 
Entity is one of 
Rock
Paper
Scissor
/*
/*Function definition
computerPlay randomly returns a random entity*/
const computerPlay = () => {
    const entityArray = ["rock","scissors","paper"]
    return entityArray[Math.floor(Math.random() * 3)]
}

/*Simulates a round of the game and declares the winner
Both paramters are of type Entity
round("Rock","Paper") => "You lose!, Paper beats Rock"
*/

const round = (playerSel, computerSelection) => {
    const correctedSel = playerSel.toLowerCase()
    const win = () => {return `You win! ${correctedSel} beats ${computerSelection}`}
    const lose = () => { return `You lose! ${computerSelection} beats ${correctedSel}`}
    const tie = () => {return `You tie!`}
    switch (correctedSel) {
        case 'rock':
            switch (computerSelection.toLowerCase()) {
                case 'paper':
                    return lose()
                    break;
                case 'scissors':
                    return win()
                    break
                case 'rock':
                    return tie()
                    break;
            }
            break;
    
        case 'paper':
            switch (computerSelection.toLowerCase()) {
                case 'paper':
                    return tie()
                    break;
                case 'scissors':
                    return lose()
                    break
                case 'rock':
                    return win()
                    break;
            }
            break;

        case 'scissors':
            switch (computerSelection.toLowerCase()) {
                case 'paper':
                    return win()
                    break;
                case 'scissors':
                    return tie()
                    break
                case 'rock':
                    return lose()
                    break;
            }
            break;
    }
}

//game() plays a game of rock paper scissors of 5 rounds

const game = (playerSelection, computerSelection) => {
    computerSelection = computerPlay()
    const winner = round(playerSelection, computerSelection)
    if (winner.indexOf("win") !== -1) {
        playerScore += 1
    }
    if (winner.indexOf("lose") !== -1) {
        computerScore += 1
    }
    rounds += 1

    result.textContent = `You have won ${playerScore} rounds out of ${rounds} total rounds`;
    
}


//DOM manipulation
const body = document.querySelector('body')

//buttons
const rock = document.createElement('button')
rock.addEventListener('click', () => { 
    playerSelection = 'rock'
    game(playerSelection, computerSelection)
    if(playerScore === 5 || computerScore === 5) {
        result.textContent = playerScore === 5 ? 'player won' : 'computer won'
    }})

    rock.textContent = "rock"
body.appendChild(rock)

const scissors = document.createElement('button')
scissors.addEventListener('click',() => { 
    playerSelection = 'scissors'
    game(playerSelection,computerSelection)
    if(playerScore === 5 || computerScore === 5){
        result.textContent = playerScore === 5 ? 'player won' : 'computer won'
    }})

    scissors.textContent = 'scissors'
body.appendChild(scissors)

const paper = document.createElement('button')
paper.addEventListener('click', () => { 
    playerSelection = 'paper'
    game(playerSelection, computerScore)
    if(playerScore === 5 || computerScore === 5) {
        result.textContent = playerScore === 5 ? 'player won' : 'computer won'
    }})

    paper.textContent = 'paper'
body.appendChild(paper)

//results
const result = document.createElement('div')
body.appendChild(result)



