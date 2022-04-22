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
    const entityArray = ["rock","scissors","papers"]
    return entityArray[Math.floor(Math.random() * 3)]
}