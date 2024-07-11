'use strict';

// const number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = number;

// document.querySelector('.check').addEventListener('click', function() {
//     const guess = Number(document.querySelector('.guess'));
//     const score = document.querySelector('.score');

//     if (!guess) {
//         document.querySelector('.message').textContent =
//             'try a number from 1 to 20';
//     } else if (guess > number) {
//         document.querySelector('.message').textContent = 'Too High🙄';
//         score--;
//     } else if (guess < number) {
//         document.querySelector('.message').textContent = 'Too Low😑';
//         score--;
//     } else if (guess === number) {
//         document.querySelector('.message').textContent =
//             'You have guessed the correct number!!!👌';
//     }
// });

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    //when there is no input
    if (!guess) {
        document.querySelector('.message').textContent =
            '😣 Enter a number from 1 to 20';
    } else if (guess === secretNumber) {
        //when the player wins the game
        document.querySelector('.message').textContent =
            "🥳 You've selected the correct number!";
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess > secretNumber) {
        if (score > 1) {
            //if guess number is greater than secretNumber and score > 1
            document.querySelector('.message').textContent = '🤪 Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            //Lost the game
            document.querySelector('.message').textContent =
                '😪 You have lost the game!';
            score--;
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#EE4B2B';
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            //if guess number is lesser than secretNumber and score < 1
            document.querySelector('.message').textContent = '🤪 Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent =
                '😪 You have lost the game!';
            score--;
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#EE4B2B';
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});