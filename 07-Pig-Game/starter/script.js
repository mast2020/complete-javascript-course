'use strict';

// Select elements
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// Starting condition
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
diceEl.classList.add('hidden');

// Helper functions
const setScoreEl = function (score) {
  document.querySelector(`#score--${activePlayer}`).textContent = score;
};

const setCurrentScoreEl = function (currentScore) {
  document.querySelector(
    `#current--${activePlayer}`
  ).textContent = currentScore;
};

const toggleActivePlayerClass = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');
};

const switchPlayers = function () {
  toggleActivePlayerClass();
  activePlayer = activePlayer === 0 ? 1 : 0;
  toggleActivePlayerClass();
};

const declareWinner = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
};

// ---------------------------------------------------

// Dice roll functionality:
btnRoll.addEventListener('click', function () {
  // Generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // Display dice roll
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // If not 1, add dice value to current score
  if (dice !== 1) {
    currentScore += dice;
    setCurrentScoreEl(currentScore);

    // If 1, set current score to 0 and switch players
  } else {
    // Set current score to 0
    currentScore = 0;
    setCurrentScoreEl(currentScore);

    // Switch players
    switchPlayers();
  }
});

// ---------------------------------------------------

// Hold score functionality:
btnHold.addEventListener('click', function () {
  // Add current score to total score
  scores[activePlayer] += currentScore;
  setScoreEl(scores[activePlayer]);
  currentScore = 0;
  setCurrentScoreEl(currentScore);

  // If total score >= 100, current player wins
  if (scores[activePlayer] >= 100) {
    declareWinner();
    diceEl.classList.add('hidden');
    btnRoll.classList.add('hidden');
    btnHold.classList.add('hidden');

    // If total score < 100, switch players
  } else {
    switchPlayers();
  }
});

// ---------------------------------------------------

// New game functionality:
btnNew.addEventListener('click', function () {
  // Set scores of both players to 0
  scores = [0, 0];
  score0El.textContent = 0;
  score1El.textContent = 0;

  // Set current score to 0
  currentScore = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // Set player 1 to active player
  activePlayer = 0;
  player0.classList.add('player--active');
  player1.classList.remove('player--active');

  // Remove winner class from previous winner
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');

  // Make roll and hold button visible again
  btnRoll.classList.remove('hidden');
  btnHold.classList.remove('hidden');
});
