const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const button = document.getElementById('button');
const main = document.querySelector('.main');

const scoreboard = {
    player: 0,
    computer: 0
};

function play(e) {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    // console.log(playerChoice,computerChoice,winner);
    showWinner(winner,computerChoice);

}

function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.34) {
        return 'Grass-Type';
    }
    else if (rand <= 0.67) {
        return 'Fire-Type';
    }
    else {
        return 'Water-Type';
    }
}

function getWinner(p, c) {
    if (p === c) {
        return 'Match Draw';
    } else if (p === 'Grass-Type') {
        if (c === 'Fire-Type') {
            return 'Computer Wins';
        }
        else {
            return 'Player Wins';
        }
    } else if (p === 'Fire-Type') {
        if (c === 'Water-Type') {
            return 'Computer Wins';
        }
        else {
            return 'Player Wins';
        }
    } else if (p === 'Water-Type') {
        if (c === 'Grass-Type') {
            return 'Computer Wins';
        }
        else {
            return 'Player Wins';
        }
    }
}

function showWinner(winner,computerChoice) {
    if (winner === 'Player Wins') {
        scoreboard.player++;
        result.innerHTML = `
        <h1 class="win_text">You Win</h1>
        <h3>Computer Chose ${computerChoice}</h3>`;
    } else if (winner === 'Computer Wins') {
        scoreboard.computer++;
        result.innerHTML = `
        <h1 class="lose_text">You Lose</h1>
        <h3>Computer Chose ${computerChoice}</h3>`;
    } else {
        result.innerHTML = `
        <h1>Match Draw</h1>
        <h3>Computer Chose ${computerChoice}</h3>`;
    }

    score.innerHTML = `
    <h3>Player: ${scoreboard.player}</h3>
    <h3>Computer: ${scoreboard.computer}</h3>
    `;

    main.style.display = 'block';

    

}
function clearMain(e) {
    if (e.target === main) {
        main.style.display = 'none';
    }
}

function restartGame(e) {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
    <h3>Player: 0</h3>
    <h3>Computer: 0</h3>
    `
   

}

choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click',clearMain);
button.addEventListener('click',restartGame);