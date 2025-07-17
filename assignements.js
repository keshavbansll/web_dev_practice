//Write a JavaScript function to generate a random number within a range(start,end)

let start = 1;
let end = 10;

function randomBetween(start,end) {
    let diff = end - start;
    let randomNumber = Math.floor(Math.random()*diff) + start;
    return randomNumber; 
};

console.log(randomBetween(start,end));