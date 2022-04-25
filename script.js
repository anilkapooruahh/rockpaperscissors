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
    switch (correctedSel.toLowerCase()) {
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

