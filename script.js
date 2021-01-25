let computerRandom = Math.floor(Math.random() * Math.floor(3));

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

let playerSelection = prompt("Please enter your selection: Rock/Paper/Scissors: ").toLowerCase();

function humanPlay() {
  let playerRandom = null;
  if (playerSelection == "rock") {
    playerRandom = 0;
    } else if (playerSelection == "paper") {
    playerRandom = 1;
  } else if (playerSelection == "scissors") {
    playerRandom = 2;
  } else {
    console.log("Please enter \"rock\", \"paper\" or \"scissors\" next time. Bye!");
  }
  return playerRandom;
}

function playRound() {
  computerPlay();
  playerRandom = humanPlay();
  console.log("Computer: " + computerRandom + "; Player: " + playerRandom);
  if (playerRandom == computerRandom) {
    console.log("It's a tie!");
  } else if ((playerRandom < computerRandom && (computerRandom - playerRandom) != 2) || (playerRandom - computerRandom == 2)) {
    console.log("You lose: " + `${computerSelection}` + " beats " + `${playerSelection}` + "!");
  } else {
    console.log("Congratulations! You win!")
  }
}

console.log(playRound());