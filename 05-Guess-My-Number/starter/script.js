'use strict';

// document.querySelector('.number').textContent;
// document.querySelector('.score').textContent;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No number entered!';
  }
});
