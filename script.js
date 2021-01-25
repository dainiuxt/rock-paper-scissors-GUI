// let computerRandom = Math.floor(Math.random() * Math.floor(3));
let computerRandom = 0;
computerSelection = computerPlay();
function computerPlay() {
  let computerSelection = '';
  if (computerRandom == 0) {
    computerSelection = 'rock';
  } else if (computerRandom == 1) {
    computerSelection = 'paper';
  } else {
    computerSelection = 'scissors';
  }
  return computerSelection;
}

let playerSelection = prompt("Please enter your selection: Rock/Paper/Scissors:").toLowerCase();

function humanPlay() {
  let playerRandom = null;
  while(playerRandom === null) {
    if (playerSelection == "rock") {
      playerRandom = 0;
      } else if (playerSelection == "paper") {
      playerRandom = 1;
    } else if (playerSelection == "scissors") {
      playerRandom = 2;
    } else {
      playerRandom = null;
      playerSelection = prompt("Please enter \"rock\", \"paper\" or \"scissors\":");
    }
  }
  return playerRandom;
}

let computerScore = 0;
let userScore = 0;

function playRound() {
  computerPlay();
  playerRandom = humanPlay();
  if (playerRandom == computerRandom) {
    computerScore;
    userScore;
    console.log("It's a tie!");
  } else if ((playerRandom < computerRandom && (computerRandom - playerRandom) != 2) || (playerRandom - computerRandom == 2)) {
    computerScore++;
    userscore;
    console.log("You lose: " + `${computerSelection}` + " beats " + `${playerSelection}` + "!");
  } else {
    computerScore;
    userScore++;
    console.log("Congratulations! You win!")
  }
}

function game() {
  for (i=1; i<6; i++) {
    playRound();
    console.log("The game score after round " + i);
    console.log("Computer " + computerScore + ":" + userScore + " You");
  }
}

console.log(game());