// Guessing Game
// User enters a max number & then tries to guess a random
// generated number between 1 & max.

while (true) {

    const maxInput = prompt("Enter Maximum Value");

    if (maxInput === null || maxInput.toLowerCase() === "quit") {
        console.log("User exited before starting");
        break;
    }

    let max = parseInt(maxInput);

    if (isNaN(max) || max <= 0) {
        alert("Invalid input. Please enter a positive integer.");
        continue;
    }

    const random = Math.floor((Math.random()*max) + 1);

    while (true) {
        let guessInput = prompt(`Guess a number between 1 and ${max}.`);

        if (guessInput === null || guessInput.toLowerCase() === "quit") {

            console.log(`User quit. The random number was ${random}.`);
            break;

        }

        let guess = parseInt(guessInput);

        if (isNaN(guess) || guess < 1 || guess > max) {
            alert(`Please enter a valid number between 1 and ${max}.`)
            continue;
        }

        if (guess === random) {
            let playAgain = prompt("Correst guess! \nType 'play' to play again or 'quit' to exit.");

            if (playAgain && playAgain.toLowerCase() === "play") {
                console.clear();
                break;
            } else if (playAgain && playAgain.toLowerCase() === "quit") {
                console.log("User chose to quit after a correct guess.");
                break;
            } else {
                alert("Invalid input. Returning to game...");
            }

        } else {
            alert("Wrong guess. Try again.")
        }
    }

    let confirmPlay = confirm("Do you want to continue playing?");
    if (!confirmPlay) {
        console.log("User ended the game.");
        break;
    }
}