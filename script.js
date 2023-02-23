'use strict';

//Create Scecret number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
// document.querySelector('.number').textContent = secretNumber;

// Create score counter
let score = 20;
let highscore = 0;

//Create function write Message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Add event when user clicks
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //check user's input
  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number';
    displayMessage('⛔️ No number');
  }
  //When the input number is correct
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '✅ Correct number!';
    displayMessage('✅ Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    // Background changes green and bigger font-size
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  // Highscore function
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = score;
  }
  // When the input number is incorrect
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📉 Too high!' : '📈 Too high!';
      displayMessage(guess > secretNumber ? '📉 Too high!' : '📈 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '🆘 You lose the game!';
      displayMessage('🆘 You lose the game!');
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});
//   // when the input is lower than secret number
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '🆘 You lose the game!';
//       document.querySelector('body').style.backgroundColor = 'red';
//     }
//   }
//   // when the input is higher
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too high!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '🆘 You lose the game!';
//       document.querySelector('body').style.backgroundColor = 'red';
//     }
// });

// Handle 'Again' button
document.querySelector('.again').addEventListener('click', function () {
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').textContent = '';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
});
