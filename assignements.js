//Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button's color to green when it is clicked.

let button = document.createElement("button");
let body = document.querySelector("body");

button.innerText = "Click Here!";

body.append(button);

button.addEventListener("click", function () {
  this.style.backgroundColor = "green";
});
