let userChoice;
let computerChoice;

do {

    userChoice = prompt("Choose rock, paper, or scissors").toLowerCase();

    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
    }

} while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors");

let randomNum = Math.floor(Math.random() * 3);

if (randomNum === 0) {
    computerChoice = "rock";
} else if (randomNum === 1) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

if (userChoice === computerChoice) {
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