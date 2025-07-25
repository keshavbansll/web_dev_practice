let btn = document.querySelector("button");
let heading = document.querySelector("h3");
let div = document.querySelector("div");

function getRandomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  let color = `rgb(${r}, ${g}, ${b})`;
  return color;
}

btn.addEventListener("click", function () {
  let randomColor = getRandomColor();
  heading.innerText = randomColor;

  div.style.backgroundColor = randomColor;

  console.log("color updated");
});
