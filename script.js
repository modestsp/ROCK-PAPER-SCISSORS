

let playerChoice = '';
let computerChoice = '';
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let randomPlay = Math.floor(Math.random() * 3);
    if (randomPlay == 0) {
        return computerChoice = "rock";
    } else if (randomPlay == 1) {
        return computerChoice = "scissors";
    } else {
        return computerChoice = "paper";
    }
}

// Reset game
function reset() {
    playerScore = 0;
    computerScore = 0;
    roundInfo.textContent = ''
    pScore.textContent = `Player Score: ${playerScore}`
    cScore.textContent = `Computer Score: ${computerScore}`
    disable();
}

function disable() {
    document.querySelectorAll('.rps').forEach((btn) => {
        if (btn.disabled == false) {
            btn.disabled = true;
            buttons.forEach(btn => btn.classList.toggle('disabled'))
        } else {
            btn.disabled = false;
            buttons.forEach(btn => btn.classList.toggle('disabled'))
        }
    })
}


function gameOver() {
    if(playerScore >= 5) {
        roundInfo.textContent = `YOU WON! ${playerScore} to ${computerScore}` 
        pScore.textContent = `Player Score: ${playerScore}`
        cScore.textContent = `Computer Score: ${computerScore}`  
        disable();      
    } else if (computerScore >= 5) {
        roundInfo.textContent = `YOU lOSE! ${computerScore} to ${playerScore}` 
        pScore.textContent = `Player Score: ${playerScore}`
        cScore.textContent = `Computer Score: ${computerScore}` 
        disable();
    }
}


function playRound(playerChoice) {
    computerPlay();

    if (playerChoice == computerChoice) {
        roundInfo.textContent = `Draw!`
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        playerScore += 1;
        pScore.textContent = `Player Score: ${playerScore}`
        roundInfo.textContent = `You won! Rock wins Scissors`;
        gameOver();

    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        playerScore += 1;
        pScore.textContent = `Player Score: ${playerScore}`
        roundInfo.textContent = `You won! Scissors wins Paper`;
        gameOver();

    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        playerScore += 1;
        pScore.textContent = `Player Score: ${playerScore}`
        roundInfo.textContent = `You won! Paper wins Rock`;
        gameOver();

    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        computerScore += 1;
        cScore.textContent = `Computer Score: ${computerScore}`
        roundInfo.textContent = `You lose! Scissors wins Paper`;
        gameOver();
 
    } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        computerScore += 1;
        cScore.textContent = `Computer Score: ${computerScore}`
        roundInfo.textContent = `You lose! Rock wins Scissors`;
        gameOver();

    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
        computerScore += 1;
        cScore.textContent = `Computer Score: ${computerScore}`
        roundInfo.textContent = `You lose! Paper wins Rock`;
        gameOver();

    }
}

const buttons = document.querySelectorAll('.rps');
const pScore = document.querySelector('#pScore');
const cScore = document.querySelector('#cScore');
const roundInfo = document.querySelector('#roundInfo')
const resetButton = document.querySelector('#reset');

// Display Scores
pScore.textContent = `Player Score: ${playerScore}`
cScore.textContent = `Computer Score: ${computerScore}`


// Reset game
resetButton.addEventListener('click', reset);

buttons.forEach((button) => {
    button.addEventListener('click',() => {
        playerChoice = button.textContent.toLowerCase();
        console.log(playerChoice)
        playRound(playerChoice);
    });
})

