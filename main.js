function getUserChoice() {
let userChoice = prompt('Input your choice: rock, paper or scissors.')
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
   
  
  console.log(playRound(playerSelection, computerSelection));


function game(numRounds) {
console.log(`Let's play ${numRounds} rounds.`)

for (let round = 0; round <= numRounds; round ++) {
  const playerSelection = getUserChoice();
  const computerSelection = getComputerChoice();

  console.log(`Round ${numRounds}`);
  console.log(playRound(playerSelection, computerSelection));
}
}

game(5);