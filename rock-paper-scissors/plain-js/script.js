// Initialize score counts
let winCount = 0;
let loseCount = 0;
let drawCount = 0;

// Update the score counts on the page
function updateCounts() {
  document.getElementById('win-count').innerText = winCount;
  document.getElementById('lose-count').innerText = loseCount;
  document.getElementById('draw-count').innerText = drawCount;
}

// Reset the counts
function resetCounts() {
  winCount = 0;
  loseCount = 0;
  drawCount = 0;
  updateCounts();
  document.getElementById('result').innerText = '';
}

// Add event listeners for the game buttons
document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

// Add event listener for the reset button
document.getElementById('reset').addEventListener('click', resetCounts);

// Play the game and update the result and counts
function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = '';

  if (userChoice === computerChoice) {
    result = "It's a draw!";
    drawCount++;
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You win!';
    winCount++;
  } else {
    result = 'You lose!';
    loseCount++;
  }

  document.getElementById('result').innerText = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
  updateCounts();
}
