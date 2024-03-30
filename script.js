
//! HTML Stuff
const selection = document.getElementById("selection");
const botSelection = document.getElementById("botSelection");
const decision = document.getElementById("decision");
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const replay = document.getElementById('replay');
const playerScoreElement = document.getElementById("playerScore");
const botScoreElement = document.getElementById("botScore");

const rockColour = 'gray';
const paperColour = 'white';
const scissorsColour = 'rgb(0, 132, 255)';

let symbol;
let playerScore = 0;
let botScore = 0;

function rock() {
    selection.innerHTML = '🪨';
    selection.style.backgroundColor = rockColour;
    selection.style.opacity = 1;
    symbol = "R";
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    playGame();
}

function paper() {
    selection.innerHTML = '📄';
    selection.style.backgroundColor = paperColour;
    selection.style.opacity = 1;
    symbol = "P";
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    playGame();
}

function scissors() {
    selection.innerHTML = '✂️';
    selection.style.backgroundColor = scissorsColour;
    selection.style.opacity = 1;
    symbol = "S";
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    playGame();
}

function refresh() {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    selection.innerHTML = "";
    selection.style.opacity = 0;
    selection.style.backgroundColor = "black";
    botSelection.innerHTML = "";
    botSelection.style.opacity = 0;
    botSelection.style.backgroundColor = "black";
    decision.innerHTML = "";
    decision.style.backgroundColor = 'black';
}

//! Bot Code

function decideWinner(player, bot) {
    if (player == "R" && bot == "R") {
        decision.innerHTML = 'Tie';

        botSelection.innerHTML = '🪨';
        botSelection.style.backgroundColor = rockColour;
        botSelection.style.opacity = 1;
    } else if (player == "R" && bot == "P") {
        decision.innerHTML = 'Bot Wins';

        botSelection.innerHTML = '📄';
        botSelection.style.backgroundColor = paperColour;
        botSelection.style.opacity = 1;

        botScore++;
    } else if (player == "R" && bot == "S") {
        decision.innerHTML = 'Player Wins';

        botSelection.innerHTML = '✂️';
        botSelection.style.backgroundColor = scissorsColour;
        botSelection.style.opacity = 1;

        playerScore++;
    } else if (player == "P" && bot == "R") {
        decision.innerHTML = 'Player Wins';

        botSelection.innerHTML = '🪨';
        botSelection.style.backgroundColor = rockColour;
        botSelection.style.opacity = 1;

        playerScore++;
    } else if (player == "P" && bot == "P") {
        decision.innerHTML = 'Tie';

        botSelection.innerHTML = '📄';
        botSelection.style.backgroundColor = paperColour;
        botSelection.style.opacity = 1;
    } else if (player == "P" && bot == "S") {
        decision.innerHTML = 'Bot Wins';

        botSelection.innerHTML = '✂️';
        botSelection.style.backgroundColor = scissorsColour;
        botSelection.style.opacity = 1;

        botScore++;
    } else if (player == "S" && bot == "R") {
        decision.innerHTML = 'Bot Wins';

        botSelection.innerHTML = '🪨';
        botSelection.style.backgroundColor = rockColour;
        botSelection.style.opacity = 1;

        botScore++;
    } else if (player == "S" && bot == "P") {
        decision.innerHTML = 'Player Wins';

        botSelection.innerHTML = '📄';
        botSelection.style.backgroundColor = paperColour;
        botSelection.style.opacity = 1;

        playerScore++;
    } else if (player == "S" && bot == "S") {
        decision.innerHTML = 'Tie';

        botSelection.innerHTML = '✂️';
        botSelection.style.backgroundColor = scissorsColour;
        botSelection.style.opacity = 1;
    }
}
function playGame() {
    let symbols = ["R", "P", "S"];
    let aiChoice = symbols[Math.floor(Math.random() * symbols.length)];

    decideWinner(symbol, aiChoice);

    playerScoreElement.innerHTML = playerScore;
    botScoreElement.innerHTML = botScore;
}