//Create an input element on the page with a  placeholder "enter your name" and an H2 heading on the
//page inside HTML.
//The purpose of this input element is to enter a user's name so it should only input letters
//from a-z, A-Z and space (all other characters should not be detected).
//Whenever the user inputs the name, their input should be dynamically visible inside the heading.

let input = document.querySelector("input");
let h2 = document.querySelector("h2");

input.addEventListener("input", function () {
  let heading = input.value.replace(/[^a-zA-Z]/, "");
  h2.innerText = heading;
});
