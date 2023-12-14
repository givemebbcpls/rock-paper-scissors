let getComputerChoice = () => {
	let choices = ['rock', 'paper', 'scissors'];
	let choice = Math.floor(Math.random() * 3);
	return choices[choice];
}

let playRound = (playerSelection, computerSelection) => {
	playerSelection = playerSelection.toLowerCase();
	if (!['rock', 'paper', 'scissors'].includes(playerSelection)) return;
	let result;
	let winProbabilities = ['You win!', 'You Lose!'];
	let winnerChoice;
	let looserChoice;
	if (playerSelection === computerSelection) {
		return ['It\'s a draw!', 0];
	} else if (playerSelection === 'rock' && computerSelection === 'scissors') {
		result = winProbabilities[0];
		winnerChoice = playerSelection;
		looserChoice = computerSelection;
		isPlayerWin = 1;
	} else if (playerSelection === 'paper' && computerSelection === 'rock') {
		result = winProbabilities[0];
		winnerChoice = playerSelection;
		looserChoice = computerSelection;
		isPlayerWin = 1;
	} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
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
let game = () => {
	let score = [0, 0];
	while (score[0] < 3 && score[1] < 3) {
		let playerSelection = prompt('What is your choice?', '');
		if (playerSelection === null) return;
		let computerSelection = getComputerChoice();
		let roundResult;
		if (roundResult = playRound(playerSelection, computerSelection)) {
			switch (roundResult[1]) {
				case 1:
					score[0]++;
					break;
				case -1:
					score[1]++;
			}
			console.log(roundResult[0] +
				`\nY: ${score[0]}, C: ${score[1]}` +
				'\n'.padEnd(roundResult[0].length + 1, '-'));
		}
	}
	let verdict = '';
	if (score[0] > score[1]) {
		verdict += 'Congratulations! You are winner.';
	} else {
		verdict += 'Unfortunatly, you are lose.';
	}
	console.log(verdict +
		` Final score is:\n\tComputer - ${score[1]}\n\tHuman - ${score[0]}`);
}
game();
