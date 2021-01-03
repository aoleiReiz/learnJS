'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🍾';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.score').textContent = score;

const x = function () {
  console.log(123);
};

document.querySelector('.check').addEventListener('click', function () {
  if (score > 0) {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
      document.querySelector('.message').textContent = 'NO Number!';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🍾 correct Number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      if (highScore < score) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
    if (score <= 0) {
      document.querySelector('.message').textContent = '!!! you lost the game!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = '>Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
