function getUserChoice() {
let userChoice = prompt('Input your choice: rock, paper or scissors.')
if (userChoice != ('rock' || 'paper' || "scissors")) {
    return userChoice;
} else {
  return userChoice.toLowerCase();
}
}

console.log(getUserChoice());


function getComputerChoice() {
const randomNum = Math.random();
if (randomNum < 1/3) {
  return 'rock';
} else if (randomNum < 2/3) {
  return 'paper';
} else {
  return 'scissors';
}
}

console.log(getComputerChoice());


function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'It is a tie!';
  } else if ( 
    (playerSelection === 'rock' && computerSelection === 'scissors' ) || 
    (playerSelection === 'scissors' && computerSelection === 'paper') || 
    (playerSelection === 'paper' && computerSelection=== 'rock')
  ) {
    return 'Congrats! You win!';
  } else {
    return 'Sorry, you lose!'
  }
  }
   
  const playerSelection = getUserChoice();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));


function game(numRounds) {
console.log(`Let's play ${numRounds} rounds.`)

for (let rounds = 0; rounds <= numRounds; rounds ++) {
  console.log(`Round ${numRounds}`);
  playRound(playerSelection, computerSelection);

}
}

game(5);