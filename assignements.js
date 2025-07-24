let body = document.querySelector("body");

//Create a new input and button element on the page using JavaScript only. Set the
//text of button to "Click Me"

let input = document.createElement("input");
let button = document.createElement("button");
button.innerText = "Click Me";

body.append(input);
body.append(button);

//Add following attributes to the element:
// - Change placeholder value of input to "username"
// - Change the id of button to "btn"

input.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");

//Access the btn using the querySelector and button id. Change the button background
//Color to blue and text color to white.

button.style.backgroundColor = "blue";
button.style.color = "white";

//Create an h1 element on the page and set its text to "DOM Practice". underlined.
//Change its color to purple

let h1 = document.createElement("h1");
body.append(h1);
h1.innerText = "DOM Practice";
h1.style.textDecoration = "underline";
h1.style.color = "purple";

//Create a p tag on the page and set its text to  "Web Dev JavaScript Practice" where
//JavaScript is bold.

let p = document.createElement("p");
p.innerHTML = "Web Dev <b>JavaScript</b> Practice";
body.append(p);
