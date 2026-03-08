let userChoice = prompt("Choose rock, paper, or scissors").toLowerCase();
let computerChoice = Math.floor(Math.random() * 3);

if (computerChoice === 0) {
    computerChoice = "rock";
} else if (computerChoice === 1) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
    alert("Invalid choice. Please refresh and enter rock, paper, or scissors.");
}

else if (userChoice === computerChoice) {
    alert("It's a tie! You both chose " + userChoice);
}

else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
) {
    alert("You win! " + userChoice + " beats " + computerChoice);
}

else {
    alert("Computer wins! " + computerChoice + " beats " + userChoice);
}