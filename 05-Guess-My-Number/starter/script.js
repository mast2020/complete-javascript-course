'use strict';

// Helper functions
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const generateRandomNumber = () => {
  return Math.trunc(Math.random() * 20) + 1;
};

const displaySecretNumber = secretNumber => {
  document.querySelector('.number').textContent = secretNumber;
};

const setSecretNumberWidth = width => {
  document.querySelector('.number').style.width = width;
};

const setBackgroundColor = color => {
  document.querySelector('body').style.backgroundColor = color;
};

const setScore = score => {
  document.querySelector('.score').textContent = score;
};

// Game variables
let secretNumber = generateRandomNumber();
let score = 20;
let highscore = 0;

// Evaluate user guess
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No user input
  if (!guess) {
    displayMessage('🛑 No number entered!');

    // Guess is correct
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    displaySecretNumber(secretNumber);
    setSecretNumberWidth('30rem');
    setBackgroundColor('#60b347');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Guess is NOT correct
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '📈 Number too high!' : '📉 Number too low!'
      );
      score--;
      setScore(score);
    } else {
      displayMessage('💥 You lost!');
      setScore(0);
    }
  }
});

// Refresh game and keep highscore
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = generateRandomNumber();
  score = 20;
  displayMessage('Start guessing...');
  setScore(score);
  displaySecretNumber('?');
  setSecretNumberWidth('15rem');
  setBackgroundColor('#222');
  document.querySelector('.guess').value = '';
});
