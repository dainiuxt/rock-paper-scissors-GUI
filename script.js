let computerRandom;
let computerSelection;
let playerSelection;
let playerRandom;
let computerScore = 0;
let playerScore = 0;

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

function humanPlay() {
  playerRandom = null;
  playerSelection = prompt("Please enter your selection: Rock/Paper/Scissors:").toLowerCase();
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

function playRound() {
  if (playerRandom === computerRandom) {
    return;
  } else if ((playerRandom < computerRandom && (computerRandom - playerRandom) != 2)
           || (playerRandom - computerRandom == 2)) {
    return computerScore++;
  } else {
    return playerScore++;
  }
}

function game() {
  for (i=1; i<6; i++) {
    computerPlay();
    humanPlay();
    playRound();
    alert(
      "Computer selection: " + computerSelection + "\n" +
      "Your selection: "  + playerSelection + "\n" +
      "Computer " + computerScore + ":" + playerScore + " You" + "\n" +
      "After round " + i + "."
      );
  }
  if (computerScore === playerScore) {
    alert("Tie.");
  } else if (computerScore > playerScore) {
    alert("You lose...");
  } else {
    alert("Congratulations You win!");
  }
}

console.log(game());