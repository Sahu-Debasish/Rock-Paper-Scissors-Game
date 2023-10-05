const choices = ["rock", "paper", "scissors"];

document.getElementById("rock").addEventListener("click", () => makeChoice("rock"));
document.getElementById("paper").addEventListener("click", () => makeChoice("paper"));
document.getElementById("scissors").addEventListener("click", () => makeChoice("scissors"));

function makeChoice(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)]; // Randomly select computer's choice
    const result = getGameResult(playerChoice, computerChoice);
    displayResult(result, playerChoice, computerChoice);
}

function getGameResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function displayResult(result, playerChoice, computerChoice) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;

    const winnerName = document.getElementById("winner-name");
    if (result === "You win!") {
        winnerName.textContent = "You are the winner!";
        winnerName.style.display = "block";
    } else if (result === "Computer wins!") {
        winnerName.textContent = "Computer wins!";
        winnerName.style.display = "block";
    } else {
        winnerName.style.display = "none";
    }
}
