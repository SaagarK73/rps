function getUserChoice() {
    const input = prompt("Choose between Rock, Papper & Scissor", "rock");
    return input.toLowerCase();
}

function getComputerChoice(){
    const choice = ['rock', 'paper', 'scissor'];
    const random = Math.floor(Math.random() * 3);
    return choice[random];
}

function getWinner(userChoice, compChoice) {
    console.log(`user choice is ${userChoice} and comp choice is ${compChoice}`);
    if(userChoice === compChoice) {
        return "tie";
    } else if(userChoice === 'rock'){
        if(compChoice === 'scissor'){
            return "user";
        }else if(compChoice === 'paper') {
            return "comp";
        }
    } else if(userChoice === 'paper'){
        if(compChoice === 'scissor'){
            return "comp";
        }else if(compChoice === 'rock') {
            return "user";
        }
    } else {
        if(compChoice === 'rock'){
            return "comp";
        }else if(compChoice === 'paper') {
            return "user";
        }
    }
}

function playGame() {
    let playerScore = 0, compScore = 0;
    let shouldContinue = isGameRunning(playerScore, compScore);

    while (shouldContinue) {
        let winner = restartGame();
        console.log(winner);
        if(winner === "user"){
            playerScore++;
        }else if(winner === "comp"){
            compScore++;
        }
        shouldContinue = isGameRunning(playerScore, compScore);
        console.log(`${shouldContinue} ======= ${playerScore} ======${compScore}`);
    }

    if(playerScore === 5){
        console.log("Player wins the game");
    }else if (compScore === 5){
        console.log("Comp wins the game");
    }
}

function isGameRunning(playerScore, compScore) {
    return (playerScore < 5 && compScore < 5);
}

function restartGame() {
    const userChoice = getUserChoice();
    const compChoice = getComputerChoice();
    return getWinner(userChoice, compChoice);
}

playGame();