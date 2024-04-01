document.addEventListener('click', game);
let score = [0, 0];
let roundVerdictDiv = document.querySelector('#round-verdict');
let gameVerdictDiv = document.querySelector('#game-verdict');
let playerScore = document.querySelector('#player-score-digit');
let computerScore = document.querySelector('#computer-score-digit');

function game (event) {
	let computerSelection = getComputerChoice();
	let playerSelection = event.target.id;
	if (playerSelection === '') return;
	let roundResult = playRound(playerSelection, computerSelection);
	
	switch (roundResult[1]) {
		case 1:
			score[0]++;
			break;
		case -1:
			score[1]++;
	}
	
	playerScore.textContent = score[0];
	computerScore.textContent = score[1];
	roundVerdictDiv.textContent = roundResult[0];
	
	if (score[0] >= 3 || score[1] >= 3) {
		gameOver();
		document.removeEventListener('click', game);
	}
}

function getComputerChoice () {
	let choices = ['rock', 'paper', 'scissors'];
	let choice = Math.floor(Math.random() * 3);
	return choices[choice];
}

function playRound(playerSelection, computerSelection) {
	let result;
	let winProbabilities = ['You win!', 'You Lose!'];
	let winnerChoice;
	let looserChoice;
	if (playerSelection === computerSelection) {
		return ['It\'s a draw!', 0];
	} else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
	(playerSelection === 'paper' && computerSelection === 'rock') ||
	(playerSelection === 'scissors' && computerSelection === 'paper')) {
		result = winProbabilities[0];
		winnerChoice = playerSelection;
		looserChoice = computerSelection;
		isPlayerWin = 1;
	} else {
		result = winProbabilities[1];
		winnerChoice = computerSelection;
		looserChoice = playerSelection;
		isPlayerWin = -1;
	}
	winnerChoice = winnerChoice[0].toUpperCase() + winnerChoice.substring(1);
	result = result.concat(' ', `${winnerChoice} beats ${looserChoice}.`);
	return [result, isPlayerWin];
}

function gameOver() {
	let verdict = '';
		if (score[0] > score[1]) {
			verdict += 'Congratulations! You are winner.';
		} else {
			verdict += 'Unfortunatly, you are lose.';
		}
		gameVerdictDiv.textContent = verdict +
		` Final score is: Human - ${score[0]}, Computer - ${score[1]}`;
}