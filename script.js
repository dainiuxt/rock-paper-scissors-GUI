let computerRandom;
let computerSelection;
let playerSelection;
let playerRandom;
let computerScore = 0;
let playerScore = 0;
let round = 0;
const results = document.querySelector(".results");
const resultsContent = document.createElement('p');
resultsContent.textContent = 'Computer ' + computerScore +  ':' + playerScore + ' You';
results.appendChild(resultsContent);

const selection = document.querySelector(".selection");
const selectionContent = document.createElement('p');

const winner = document.querySelector(".winner");
const winnerContent = document.createElement('p');

function computerPlay() {
  computerRandom = Math.floor(Math.random() * Math.floor(3));
  if (computerRandom == 0) {
    computerSelection = 'rock';
  } else if (computerRandom == 1) {
    computerSelection = 'paper';
  } else {
    computerSelection = 'scissors';
  }
  return computerRandom;
}

function resetGame() {
  computerScore = 0;
  playerScore = 0;
  round = 0;
  resultsContent.textContent = 'Computer ' + computerScore +  ':' + playerScore + ' You';
  results.appendChild(resultsContent);
  selectionContent.textContent = ' ';
  selection.appendChild(selectionContent);
  winnerContent.textContent = ' ';    
  winner.appendChild(winnerContent);
}

function playRound(clicked) {
  computerRandom = computerPlay();
  playerSelection = clicked;
  if (playerSelection === "rock") {
    playerRandom = 0;
    } else if (playerSelection === "paper") {
    playerRandom = 1;
  } else if (playerSelection === "scissors") {
    playerRandom = 2;
  }
  score();
  counter();
}

function score() {
  if (computerScore < 5 && playerScore < 5) {
    if (playerRandom == computerRandom) {
      computerScore;
      playerScore;
      selectionContent.textContent = 'Computer chose ' + computerSelection +  ', You coose ' + playerSelection + ': it\'s a tie';
      selection.appendChild(selectionContent);    
      resultsContent.textContent = 'Computer ' + computerScore +  ':' + playerScore + ' You';
      results.appendChild(resultsContent);
    } else if ((playerRandom < computerRandom && (computerRandom - playerRandom) != 2)
            || (playerRandom - computerRandom == 2)) {
      computerScore++;
      selectionContent.textContent = 'Computer chose ' + computerSelection +  ', You choose ' + playerSelection + ': ' +
        computerSelection + ' beats ' + playerSelection;
      selection.appendChild(selectionContent);
      resultsContent.textContent = 'Computer ' + computerScore +  ' : ' + playerScore + ' You';
      results.appendChild(resultsContent);
    } else {
      playerScore++;
      selectionContent.textContent = 'Computer chose ' + computerSelection +  ', You coose ' + playerSelection + ': ' +
        playerSelection + ' beats ' + computerSelection;
      selection.appendChild(selectionContent);    
      resultsContent.textContent = 'Computer ' + computerScore +  ':' + playerScore + ' You';
      results.appendChild(resultsContent);
    }
  } else {

  }
}

function counter() {
  if(computerScore === 5 || playerScore === 5) {
    if (computerScore > playerScore) {
      winnerContent.textContent = 'Game over. You lost...';    
      winner.appendChild(winnerContent);
    } else {
      winnerContent.textContent = 'You are the winner!';    
      winner.appendChild(winnerContent);
    }
  }
}