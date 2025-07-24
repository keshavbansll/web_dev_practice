let para1 = document.createElement("p");
para1.innerText = "Hey I'm red!";
document.querySelector("body").append(para1);
para1.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "Hey I'm a blue h3!";
document.querySelector("body").append(h3);
h3.classList.add("blue");

let div = document.createElement("div");
document.querySelector("body").append(div);
div.classList.add("container");

let divHeading = document.createElement("h1");
let divPara = document.createElement("p");
divHeading.innerText = "I'm in a div";
divPara.innerText = "Me too!";

div.append(divHeading);
div.append(divPara);
