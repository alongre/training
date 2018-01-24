/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

const diceObject = document.querySelector('.dice');
diceObject.style.display = 'none';
var scores = [0,0];
var roundScore = 0;
var activePlayer = 0;

const playersScoreDOM = [];

playersScoreDOM[0] = document.getElementById('score-0');
playersScoreDOM[1] = document.getElementById('score-1');

playersScoreDOM[0].textContent = 0;
playersScoreDOM[1].textContent = 0;

const playersDOM = [];
playersDOM[0] = document.getElementById('current-0');
playersDOM[1] = document.getElementById('current-1');
playersDOM[0].textContent = 0;
playersDOM[1].textContent = 0;


changePlayer = () => {
    scores[activePlayer] = 0;
    playersDOM[activePlayer].textContent = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    diceObject.style.display = 'none';
}

addScore = (dice) => {
    scores[activePlayer] += dice;
    playersDOM[activePlayer].textContent = scores[activePlayer];
}

document.querySelector('.btn-roll').addEventListener('click', () => {
    diceObject.style.display = 'block';
    const dice = Math.floor(Math.random() * 6 + 1);
    diceObject.src = 'dice-' + dice + '.png'; 
    dice > 1 ? addScore(dice) : changePlayer();
})

document.querySelector('.btn-hold').addEventListener('click', () => {
    const playerScore = Number(playersScoreDOM[activePlayer].textContent);
    const currentScore = Number(playersDOM[activePlayer].textContent);
    if (playerScore + currentScore >= 100) {

    }
    playersScoreDOM[activePlayer].textContent = playerScore + currentScore;
    changePlayer();
})