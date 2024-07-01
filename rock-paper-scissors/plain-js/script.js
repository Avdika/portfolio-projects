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

// Reset the score counts
function resetCounts() {
  winCount = 0;
  loseCount = 0;
  drawCount = 0;
  updateCounts();
  document.getElementById('result').innerText = '';
}

// Handle game version selection
document.getElementById('classic').addEventListener('click', () => startGame('classic'));
document.getElementById('extended').addEventListener('click', () => startGame('extended'));

// Handle back to game selection
document.getElementById('back').addEventListener('click', backToSelection);

function startGame(version) {
  document.getElementById('version-select').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  if (version === 'extended') {
    document.getElementById('lizard').style.display = 'inline-block';
    document.getElementById('spock').style.display = 'inline-block';
    document.querySelector('h1').innerText = 'Rock Paper Scissors Lizard Spock';
    showHelp('extended');
  } else {
    document.getElementById('lizard').style.display = 'none';
    document.getElementById('spock').style.display = 'none';
    document.querySelector('h1').innerText = 'Rock Paper Scissors';
    showHelp('classic');
  }
  resetCounts();
}

function backToSelection() {
  document.getElementById('version-select').style.display = 'block';
  document.getElementById('game').style.display = 'none';
  document.querySelector('h1').innerText = 'Select Game Version';
  showHelp('full');
}

// Add event listeners for the game buttons
document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
document.getElementById('lizard').addEventListener('click', () => playGame('lizard'));
document.getElementById('spock').addEventListener('click', () => playGame('spock'));

// Add event listener for the reset button
document.getElementById('reset').addEventListener('click', resetCounts);

// Play the game and update the result and score counts
function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  if (document.getElementById('lizard').style.display === 'inline-block') {
    choices.push('lizard', 'spock');
  }
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = '';

  if (userChoice === computerChoice) {
    result = "It's a draw!";
    drawCount++;
  } else if (
    (userChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
    (userChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
    (userChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
    (userChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
    (userChoice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock'))
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

// Show the appropriate help content based on the selected version
function showHelp(version) {
  const rulesFull = document.getElementById('rules-full');
  const rulesClassic = document.getElementById('rules-classic');
  const rulesExtended = document.getElementById('rules-extended');

  if (version === 'classic') {
    rulesFull.style.display = 'none';
    rulesClassic.style.display = 'block';
    rulesExtended.style.display = 'none';
  } else if (version === 'extended') {
    rulesFull.style.display = 'none';
    rulesClassic.style.display = 'none';
    rulesExtended.style.display = 'block';
  } else {
    rulesFull.style.display = 'block';
    rulesClassic.style.display = 'none';
    rulesExtended.style.display = 'none';
  }
}

// Handle Help modal
const modal = document.getElementById('helpModal');
const btnHelpMain = document.getElementById('help');
const btnHelpGame = document.getElementById('help-game');
const span = document.getElementsByClassName('close')[0];

btnHelpMain.onclick = function () {
  showHelp('full');
  modal.style.display = 'block';
}

btnHelpGame.onclick = function () {
  const gameTitle = document.querySelector('h1').innerText;
  if (gameTitle === 'Rock Paper Scissors') {
    showHelp('classic');
  } else {
    showHelp('extended');
  }
  modal.style.display = 'block';
}

span.onclick = function () {
  modal.style.display = 'none';
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
