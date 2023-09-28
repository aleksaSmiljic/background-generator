let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let btn = document.querySelector("button");
// let randomColor = Math.floor(Math.random() * 16777215).toString(16);

gradientColor();

function gradientColor() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
  btn.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

color1.addEventListener("input", gradientColor);

color2.addEventListener("input", gradientColor);

function randomBtn() {
  color1.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
  color2.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
  gradientColor();
}

btn.addEventListener("click", randomBtn);
