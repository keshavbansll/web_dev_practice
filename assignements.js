let favorite = "Oppenheimer";

let guess = prompt("Guess my favorite movie");

while ((guess != favorite) && (guess != 'quit')) {
    guess = prompt("Nope! Wrong guess. Please try again");
}

if (guess == favorite) {
    console.log("Congrats! Your guess is correct!!")
} else {
    console.log("It's ok. Will see you next time...")
}
