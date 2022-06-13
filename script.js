console.log('Hello, World!')

let playerChoice = '';
let computerChoice = '';
let playerScore;
let computerScore;

function computerPlay() {
    let randomPlay = Math.floor(Math.random() * 3);
    if (randomPlay == 0) {
        return computerChoice = "Rock";
    } else if (randomPlay == 1) {
        return computerChoice = "Scissors";
    } else {
        return computerChoice = "Papers";
    }
}

function playerSelection() {
    let answer = prompt('Please, enter : Rock, Papers or Scissors').
    toLowerCase();
    return playerChoice = answer[0].toUpperCase() + answer.substring(1);
}

function playRound() {
    playerSelection();
    computerPlay();
    if (playerChoice == computerChoice) {
        console.log('Draw')
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        console.log(`You won! ${playerChoice} wins ${computerChoice}`);
        return playerScore += 1;
    } else if (playerChoice == 'Scissors' && computerChoice == 'Papers') {
        console.log(`You won! ${playerChoice} wins ${computerChoice}`);
        return playerScore += 1;
    } else if (playerChoice == 'Papers' && computerChoice == 'Rock') {
        console.log(`You won! ${playerChoice} wins ${computerChoice}`);
        return playerScore += 1;
    } else if (playerChoice == 'Papers' && computerChoice == 'Scissors') {
        console.log(`You lose! ${computerChoice} wins ${playerChoice}`);
        return computerScore += 1;
    } else if (playerChoice == 'Scissors' && computerChoice == 'Rock') {
        console.log(`You lose! ${computerChoice} wins ${playerChoice}`);
        return computerScore += 1;
    } else if (playerChoice == 'Rock' && computerChoice == 'Papers') {
        console.log(`You lose! ${computerChoice} wins ${playerChoice}`);
        return computerScore += 1;
    }
}
===
function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore == computerScore) {
        console.log(`Draw! Your score: ${playerScore} Computer score: ${computerScore}`);
    } else if (playerScore > computerScore) {
        console.log(`You won! Your score: ${playerScore} Computer score: ${computerScore}`);
    } else {
        console.log(`You lose! Your score: ${playerScore} Computer score: ${computerScore}`)
    }
}


const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here
for (const person of people) {
    if (person === "Phil" || person === "Lola") {
        refused.textContent += `${person} ,`;
    } else {
        admitted.textContent += `${person} ,`;
    }
}
// refused.textContent += ;
// admitted.textContent += ;

