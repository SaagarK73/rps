function play(e) {
    
    const compChoice = getComputerChoice();
    const userChoice = e.target.innerText.toLowerCase();

    const winnerElement = document.querySelector('.winner');

    let shouldContinue = isGameRunning(playerScore, compScore);

    if(shouldContinue) {
        let winner = getWinner(userChoice, compChoice);
        if (winner === 'tie') {
            winnerElement.textContent = `its a tie !!`;
        }else {
            winnerElement.textContent = `${winner} wins this round !!`;
        }
        updateWinnerScore(winner);
    }
}

function getComputerChoice(){
    const choice = ['rock', 'paper', 'scissor'];
    const random = Math.floor(Math.random() * 3);
    return choice[random];
}

function getWinner(userChoice, compChoice) {
    updateChoicesOnUI(userChoice, compChoice);

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

function updateWinnerScore(winner) {
        
        if(winner === "user"){
            playerScore += 1;
            updateRoundWinnerUI(winner, playerScore);
        }else if(winner === "comp"){
            compScore += 1;
            updateRoundWinnerUI(winner, compScore);
        }

    if(playerScore === 5){
        updateUltimateWinner("Player");
    }else if (compScore === 5){
        updateUltimateWinner("Computer");
    }
}

function isGameRunning(playerScore, compScore) {
    return (playerScore < 5 && compScore < 5);
}

function updateChoicesOnUI(userChoice, compChoice) {
    const element = document.querySelector('.choices');
    element.textContent = `Your Choice is ${userChoice} and Computer selected ${compChoice}`;
}

function updateRoundWinnerUI(winner, score){
    const element = document.querySelector(`.${winner}.wins`);
    element.textContent = `${winner}: ${score}`;
}

function updateUltimateWinner(winner) {
    const element = document.querySelector('.ultimateWinner');
    element.textContent = `${winner} is the winner`;
}

// playGame();
let playerScore = 0, compScore = 0;
let elements = document.querySelectorAll('.button');
elements.forEach(item => item.addEventListener('click', play));